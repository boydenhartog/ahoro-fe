import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { Colors, Views } from "../styles";
import { showExpenseModal } from "../store/actions/ui";

function NavBar() {
  const dispatch = useDispatch();

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={() => dispatch(showExpenseModal)}>
        <View style={[styles.addButton, Views.dropShadow]}>
          <Text style={styles.addButtonText}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  addButton: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: Colors.white,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.primary
  },
  buttonContainer: {
    position: "absolute",
    bottom: 40,
    right: 24,
    zIndex: 100
  }
});

export default NavBar;
