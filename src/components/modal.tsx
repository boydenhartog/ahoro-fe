import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

type ModalProps = {
  title: String;
  buttonText: String;
  closeHandler: () => void;
  children: ReactNode;
};

function CustomModal(props: ModalProps) {
  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <TouchableOpacity
          onPress={() => props.closeHandler()}
        ></TouchableOpacity>
        {props.children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%"
  },
  modalContainer: {
    borderRadius: 6,
    width: 320,
    padding: 12,
    backgroundColor: "white"
  },
  buttonContainer: {
    display: "flex",
    marginTop: 20,
    alignItems: "center"
  }
});

export default CustomModal;
