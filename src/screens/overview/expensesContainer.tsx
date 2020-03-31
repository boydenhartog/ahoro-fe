import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

function ExpensesContainer() {
  const expenses = useSelector(state => state.expenses);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todays expenses: {expenses.length}</Text>
      <View style={styles.daysContainer}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    width: "95%",
    backgroundColor: "white",
    alignSelf: "center",
    padding: 20,
    marginTop: 10,
    zIndex: 10,
    shadowColor: "#C7C7C7",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10
  },
  daysContainer: {
    flexDirection: "row"
  },
  title: {
    fontSize: 20,
    color: "#4A4A4A"
  },
  dayContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#F1F1F1",
    marginLeft: 4,
    marginRight: 4
  }
});

export default ExpensesContainer;
