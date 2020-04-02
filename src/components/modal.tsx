import React, { ReactNode } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import { Colors } from "../styles";
import MotionBlock from "../components/motionBlock";
import { Typography } from "../styles";

type ModalProps = {
  title: String;
  buttonText: String;
  closeHandler: () => void;
  children: ReactNode;
};

function CustomModal(props: ModalProps) {
  return (
    <View style={styles.container}>
      <MotionBlock style={styles.closeContainer}>
        <TouchableOpacity
          onPressIn={() => props.closeHandler()}
          style={styles.hitBox}
        >
          <Icon name="times" size={30} color={Colors.primary} />
        </TouchableOpacity>
      </MotionBlock>

      <View style={styles.modalContainer}>
        <MotionBlock style={styles.titleContainer} delay={50}>
          <Text style={Typography.title}>Add expense</Text>
        </MotionBlock>
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
    padding: 20,
    backgroundColor: "white"
  },
  closeContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 1
  },
  hitBox: {
    height: 54,
    width: 54,
    alignItems: "center",
    justifyContent: "center"
  },
  titleContainer: {
    alignSelf: 'flex-start',
    marginTop: 8,
  }
});

export default CustomModal;
