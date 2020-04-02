import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors, Views } from "../styles";

function NavBar() {
  const dispatch = useDispatch();

  return (
    <View style={styles.flexContainer}>
      <View style={styles.flexButton}>
        <Text style={styles.buttonText}>Button</Text>
      </View>
      <View style={styles.flexButton}>
        <Text style={styles.buttonText}>Button</Text>
      </View>

      <View style={styles.flexButton}>
        <Text style={styles.buttonText}>Button</Text>
      </View>
      <View style={styles.flexButton}>
        <Text style={styles.buttonText}>Button</Text>
      </View>
      <TouchableOpacity
        onPress={() => dispatch({ type: "SHOW_EXPENSE_MODAL" })}
      >
        <View style={[styles.addButton, Views.dropShadow]}>
          <Text style={styles.addButtonText}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    display: "flex",
    // backgroundColor: Colors.white,
    width: "100%",
    height: 80,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "flex-end"
  },
  flexButton: {
    flex: 1,
    backgroundColor: "yellow",
    zIndex: 5
  },
  buttonText: {
    color: "blue",
    zIndex: 5
  },
  addButton: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: Colors.white,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 24,
    marginBottom: 40
  },
  addButtonText: {
    fontSize: 32,
    color: Colors.darkGrey
  }
});

export default NavBar;
