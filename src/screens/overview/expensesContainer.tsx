import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import ExpensesList from "./expensesList";

function ExpensesContainer() {
  const expenses = useSelector(state => state.expenses);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expenses: {expenses.length}</Text>
      <Text>{JSON.stringify(expenses)}</Text>
      {/* <ExpensesList expenses={expenses} /> */}
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
  title: {
    fontSize: 20,
    color: "#4A4A4A"
  },
});

export default ExpensesContainer;
