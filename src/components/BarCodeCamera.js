/**
 * Componente que realiza a leitura de QRs Codes
 *
 * @author            Eduardo Cardoso
 * @example           <BarcodeCamera onChange={(data) => console.log(data)} />
 */

import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import * as Permissions from "expo-permissions";
import { BarCodeScanner } from "expo-barcode-scanner";

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

export default function BarcodeCamera({ onChange }) {
  const [CameraPermissionGranted, setCameraPermissionGranted] = useState(null);
  const [codeScanned, setCodeScanned] = useState(false);

  async function getPermission() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    status === "granted"
      ? setCameraPermissionGranted(true)
      : setCameraPermissionGranted(false);
  }
  useEffect(() => {
    getPermission();
  }, []);

  const QRCodeScanned = ({ data }) => {
    setCodeScanned(true);
    onChange(data);
  };

  return (
    <View>
      {CameraPermissionGranted === null && (
        <>
          <View style={styles.container}>
            <Text>Conceda a permissão de à câmera</Text>
          </View>
        </>
      )}

      {!CameraPermissionGranted && (
        <>
          <View style={styles.container}>
            <Text>Permissão de acesso à camera não concedido.</Text>
          </View>
        </>
      )}

      {CameraPermissionGranted && !codeScanned && (
        <>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BarCodeScanner
              onBarCodeScanned={QRCodeScanned}
              style={{
                height: DEVICE_HEIGHT / 1.8,
                width: DEVICE_WIDTH + 2,
              }}
            ></BarCodeScanner>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
