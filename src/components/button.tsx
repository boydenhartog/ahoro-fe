import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors, Views } from "../styles";

interface ButtonProps {
  text: String;
  pressHandler: () => void;
}

function CustomButton(props: ButtonProps) {
  return (
    <TouchableOpacity onPress={() => props.pressHandler()}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 50,
    backgroundColor: Colors.primary,
    borderRadius: Views.borderRadius
  },
  buttonText: {
    color: Colors.white,
    fontSize: 20
  }
});

export default CustomButton;
