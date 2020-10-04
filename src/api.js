import * as FileSystem from "expo-file-system";
import { AsyncStorage } from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";
import { firebaseConfig } from "./configs";
import { getUserId } from "./authentication";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

let CURRENT_USER_ID = null;
const __setUserId = async () => {
  if (!CURRENT_USER_ID) {
    CURRENT_USER_ID = await getUserId();
  }
};

const lastIndexWhere = (array, predicate) => {
  const index = array.slice().reverse().findIndex(predicate);
  const count = array.length - 1;
  return index >= 0 ? count - index : index;
};

const dbh = firebase.firestore();

/**
 * Persiste uma imagem no Firebase Storage.
 *
 * @param {string} basePath caminho base para a imagem no storage
 * @param {string} filename nome da imagem (com extensão)
 * @param {string} path caminho da imagem no sistema de arquivos
 * @returns {Promise} promise que completa quando o upload é finalizado
 */
export const uploadImage = (basePath, filename, path) => {
  return fetch(path)
    .then((d) => d.blob())
    .then((data) => {
      return firebase
        .storage()
        .ref()
        .child(`${basePath}/${filename}`)
        .put(data);
    });
};

export async function processQRCode(establishmentId) {
  await __setUserId();

  const snapshot = await dbh
    .collection("establishments")
    .doc(establishmentId)
    .get();
  const data = snapshot.data();
  return {
    id: snapshot.id,
    name: data.name,
  };
}

export const isSignedIn = async () => {
  const userInfo = await _getCachedGoogleSignIn();
  return userInfo !== null && userInfo !== undefined;
};

function updateWaitTimes(queue, baseTime) {
  const result = queue.slice();

  for (let i = 0; i < result.length; i++) {
    const current = result[i];

    if (i !== 0) {
      const previous = result[i - 1];
      const prevWaitTime = previous.estimatedWaitTime ?? 0;
      const prevTime = (previous.people ?? 0) * 20;
      current.estimatedWaitTime = prevWaitTime + prevTime;
    } else {
      current.estimatedWaitTime = baseTime;
    }
  }

  return result;
}

export async function joinQueue(
  establishmentId,
  { people, priority },
  callback
) {
  await __setUserId();

  const snapshot = await dbh
    .collection("establishments")
    .doc(establishmentId)
    .get();
  const data = snapshot.data();

  const queueObject = {
    people,
    priority,
    userId: CURRENT_USER_ID,
  };

  const queue = data.queue.slice();

  // push to data.queue, on the proper position
  if (priority) {
    let lastIndex = lastIndexWhere(queue, (val) => val.priority === true) + 1;
    if (lastIndex < 0) {
      lastIndex = 0;
    }

    queue.splice(lastIndex, 0, queueObject);
  } else {
    queue.push(queueObject);
  }

  data.queue = updateWaitTimes(queue, data.usedCapacity * 10);
  data.peopleInQueue = data.queue.reduce((acc, curr) => acc + curr.people, 0);

  // update doc
  await dbh
    .collection("establishments")
    .doc(establishmentId)
    .set(data, {
      mergeFields: ["peopleInQueue", "queue"],
    });

  // realtime update
  const cancelSubscription = await dbh
    .collection("establishments")
    .doc(establishmentId)
    .onSnapshot(
      (snapshot) => {
        const snapData = snapshot.data();
        const queueObjectIndex = snapData.queue.findIndex(
          (val) => val.userId === CURRENT_USER_ID
        );
        const queueObject = snapData.queue[queueObjectIndex];
        callback({ ...queueObject, positionInQueue: queueObjectIndex + 1 });
      },
      (error) => {
        callback(null);
      }
    );

  return () => {
    cancelSubscription();

    // TODO: undo all changes above... ://
  };
}

// LATER: para app do admin, receber também o userId como parâmetro
export async function enterEstablishment(establishmentId) {
  await __setUserId();

  const snapshot = await dbh
    .collection("establishments")
    .doc(establishmentId)
    .get();
  const data = snapshot.data();

  // find and remove object on data.queue by CURRENT_USER_ID
  const indexInQueue = data.queue.findIndex(
    (val) => val.userId === CURRENT_USER_ID
  );
  const queueObject = data.queue[indexInQueue];
  data.queue.splice(indexInQueue, 1);

  // update data.peopleInQueue
  data.peopleInQueue = data.queue.reduce((acc, curr) => acc + curr.people, 0);

  // update usedCapacity
  data.usedCapacity += queueObject.people;

  // update remaining entries on data.queue (estimatedWaitTime)
  const queue = data.queue.slice();
  data.queue = updateWaitTimes(queue, data.usedCapacity * 10);

  // send updated list to firebase
  await dbh
    .collection("establishments")
    .doc(establishmentId)
    .set(data, { mergeFields: ["queue", "peopleInQueue", "usedCapacity"] });
}

export async function getQRCodeInfo() {
  await __setUserId();
  return { userId: CURRENT_USER_ID };
}

export async function leaveEstablishment(establishmentId, numberOfPeople) {
  const snapshot = await dbh
    .collection("establishments")
    .doc(establishmentId)
    .get();
  const data = snapshot.data();

  data.usedCapacity -= numberOfPeople;
  const queue = data.queue.slice();
  data.queue = updateWaitTimes(queue, data.usedCapacity * 10);

  await dbh
    .collection("establishments")
    .doc(establishmentId)
    .set(data, { mergeFields: ["queue", "usedCapacity"] });
}
