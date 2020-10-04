import * as firebase from "firebase";
import "firebase/firestore";
import { firebaseConfig } from "./configs";
import { getUserId } from "./authentication";
import { call } from "react-native-reanimated";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

let CURRENT_USER_ID = null;
const __setUserId = async () => {
  if (!CURRENT_USER_ID) {
    CURRENT_USER_ID = await getUserId();
  }
};

const dbh = firebase.firestore();

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

  // push to data.queue, on the proper position
  if (priority) {
    let index = data.queue.findIndex((val) => val.priority === true) - 1;
    if (index < 0) {
      index = 0;
    }

    const peopleInQueueBefore = data.queue.reduce((a, b) => a + b.people, 0);
    const waitTime = data.usedCapacity * 15 + peopleInQueueBefore * 30;
    queueObject.estimatedWaitTime = waitTime;
    data.queue.splice(index, 0, queueObject);
  } else {
    const waitTime = data.usedCapacity * 15 + data.peopleInQueue * 30;
    queueObject.estimatedWaitTime = waitTime;
    data.queue.push(queueObject);
  }

  // increment peopleInQueue by people
  data.peopleInQueue += people;

  // update doc
  await dbh
    .collection("establishment")
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
  data.peopleInQueue -= queueObject.people;

  // update remaining entries on data.queue (estimatedWaitingTime)
  data.queue.forEach((val, index, array) => {
    const queueBefore = array.slice(0, index);
    const peopleInQueueBefore = queueBefore.reduce((a, b) => a + b.people, 0);
    const waitTime = data.usedCapacity * 15 + peopleInQueueBefore * 30;
    val.estimatedWaitingTime = waitTime;
  });

  // send updated list to firebase
  await dbh
    .collection("establishments")
    .doc(establishmentId)
    .set(data, { mergeFields: ["queues", "peopleInQueue"] });
}

export async function getQRCodeInfo() {
  await __setUserId();
  return { userId: CURRENT_USER_ID };
}
