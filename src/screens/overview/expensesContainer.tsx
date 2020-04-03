import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import ExpensesList from "./expensesList";
import { Colors, Typography, Views } from "../../styles";

function ExpensesContainer() {
  const expenses = useSelector(state => state.expenses);

  return (
    <>
      <View style={styles.container}>
        <Text style={[Typography.title, styles.expensesTitle]}>
          Expenses: {expenses.length}
        </Text>
      </View>
      <ExpensesList expenses={expenses} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    width: '95%'
  },
  expensesTitle: {
    marginTop: 24,
    color: Colors.white,
  }
});

export default ExpensesContainer;
