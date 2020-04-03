import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ExpensesContainer from './expensesContainer';
import { Colors, Typography } from "../../styles";

function Overview() {
  return (
    <View style={styles.flexContainer}>
      <View style={styles.container}>
        <Text style={[Typography.title, styles.screenTitle]}>Summary</Text>

        <View style={styles.mainContainer}>
          <View style={styles.container}>
            <Text style={styles.title}>Today</Text>
          </View>
          <View style={styles.container}>
            <View style={styles.columnContainer}>
              <View style={styles.column}>
                <Text style={styles.title}>Spent</Text>
                <Text style={[styles.title, styles.money]}>$40.98</Text>
              </View>
              <View style={styles.column}>
                <Text style={styles.title}>Left</Text>
                <Text style={[styles.title, styles.money]}>$7.32</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.mask}></View>

        <ExpensesContainer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%"
  },
  columnContainer: {
    display: "flex",
    flexDirection: "row"
  },
  money: {
    fontSize: 28
  },
  column: {
    flex: 1
  },
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    color: Colors.white
  },
  mainContainer: {
    display: "flex",
    height: 190,
    width: "95%",
    zIndex: 3,
    backgroundColor: "transparent",
    alignSelf: "center",
    paddingLeft: 20,
    paddingTop: 20,
    alignItems: "flex-start"
  },
  mask: {
    marginTop: 88,
    backgroundColor: Colors.white,
    opacity: 0.14,
    height: 190,
    width: "95%",
    zIndex: 2,
    alignSelf: "center",
    position: "absolute",
    borderRadius: 6
  },
  screenTitle: {
    marginTop: 30,
    color: Colors.white,
    alignSelf: "flex-start",
    marginLeft: 12,
    textAlign: "left",
    marginBottom: 20
  }
});

export default Overview;