import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import MotionBlock from "../../components/motionBlock";
import moment from "moment";
import { Colors, Typography, Views } from "../../styles";

interface ExpensesContainerProps {
  expenses: Array<{
    shortDescription: string;
    amount: number;
    currency: string;
    date: string;
  }>;
}

function ExpensesContainer({ expenses }: ExpensesContainerProps) {
  return (
    <ScrollView style={styles.scrollView}>
      {expenses.map((expense, index) => {
        return (
          <MotionBlock
            delay={index * 25}
            style={{ ...Views.row, ...styles.expenseRow }}
            key={index}
          >
            <View style={styles.iconContainer}>
              <Icon name="coffee" size={24} color={Colors.primary} />
            </View>
            <View style={styles.body}>
              <View style={styles.column}>
                <Text style={[Typography.subtitle, styles.bodyTitle]}>
                  {expense.shortDescription}
                </Text>
                <Text style={Typography.base}>
                  {moment(expense.date).format("ddd, hA")}
                </Text>
              </View>
            </View>

            <View style={styles.end}>
              <View style={styles.column}>
                <Text
                  style={[
                    Typography.subtitle,
                    styles.bodyTitle,
                    styles.expenses
                  ]}
                >
                  {expense.amount}
                </Text>
                <Text style={[Typography.base, styles.expenses]}>
                  {expense.currency}
                </Text>
              </View>
            </View>
          </MotionBlock>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: "column",
    flex: 1,
    width: "95%"
  },
  expenseRow: {
    flexDirection: "row"
  },
  column: {
    flex: 1
  },
  iconContainer: {
    width: 60,
    justifyContent: "center",
    alignContent: "center"
  },
  body: {
    flexDirection: "column",
    flex: 1
  },
  end: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    width: 80
  },
  bodyTitle: {
    fontWeight: "bold"
  },
  endTitle: {
    fontWeight: "bold"
  },
  expenses: {
    textAlign: "right",
    color: Colors.error
  }
});

export default ExpensesContainer;
