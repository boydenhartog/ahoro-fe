import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { Colors, Views } from "../styles";
import { showExpenseModal } from "../store/actions/ui"

function NavBar() {
  const dispatch = useDispatch();

  return (
    <View style={styles.flexContainer}>
      <TouchableOpacity
        onPress={() => dispatch(showExpenseModal)}
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
    width: "100%",
    height: 80,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "flex-end"
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
    fontWeight: "bold",
    color: Colors.primary
  }
});

export default NavBar;
