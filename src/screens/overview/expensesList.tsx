import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Typography } from "../../styles";
// import { useSelector } from "react-redux";

interface ExpensesContainerProps {
  expenses: Array<{
    shortDescription: string,
    amount: number,
    currency: string,
    date: string,
  }>
}

function ExpensesContainer(props: ExpensesContainerProps) {
  console.log(props.expenses)
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={Typography.base}>Coffee</Text>
        </View>
        <View style={styles.column}>
          <Text style={Typography.base}>2.50</Text>
        </View>
        <View style={styles.column}>
          <Text style={Typography.base}>EUR</Text>
        </View>
        <View style={styles.column}>
          <Text style={Typography.base}>2 april</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={Typography.base}>Coffee</Text>
        </View>
        <View style={styles.column}>
          <Text style={Typography.base}>2.50</Text>
        </View>
        <View style={styles.column}>
          <Text style={Typography.base}>EUR</Text>
        </View>
        <View style={styles.column}>
          <Text style={Typography.base}>2 april</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={Typography.base}>Coffee</Text>
        </View>
        <View style={styles.column}>
          <Text style={Typography.base}>2.50</Text>
        </View>
        <View style={styles.column}>
          <Text style={Typography.base}>EUR</Text>
        </View>
        <View style={styles.column}>
          <Text style={Typography.base}>2 april</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flexDirection: "column"
  },
  row: {
    flexDirection: "row",
    flex: 1
  },
  column: {
    flex: 1,
    height: 50
  }
});

export default ExpensesContainer;
