import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Expenses from './expensesContainer';

function Overview() {
  return (
    <View style={sheet.flexContainer}>
      <View style={[sheet.container, sheet.topContainer]}>
        <Text style={sheet.screenTitle}>Summary</Text>

        <View style={sheet.mainContainer}>
          <View style={sheet.container}>
            <Text style={sheet.title}>Today</Text>
          </View>
          <View style={sheet.container}>
            <View style={sheet.columnContainer}>
              <View style={sheet.column}>
                <Text style={sheet.title}>Spent</Text>
                <Text style={[sheet.title, sheet.money]}>$40.98</Text>
              </View>
              <View style={sheet.column}>
                <Text style={sheet.title}>Left</Text>
                <Text style={[sheet.title, sheet.money]}>$7.32</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={sheet.mask}></View>
        
        <Expenses />

      </View>
    </View>
  );
}

const sheet = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  columnContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  money: {
    fontSize: 28,
  },
  column: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  topContainer: {
    backgroundColor: '#4C6FE3',
  },
  title: {
    fontSize: 20,
    color: '#fff',
  },
  mainContainer: {
    display: 'flex',
    height: 190,
    width: '95%',
    zIndex: 3,
    backgroundColor: 'transparent',
    alignSelf: 'center',
    paddingLeft: 20,
    paddingTop: 20,
  },
  mask: {
    marginTop:88,
    backgroundColor: '#FFFFFF',
    opacity: 0.14,
    height: 190,
    width: '95%',
    zIndex: 2,
    alignSelf: 'center',
    position: 'absolute',
    borderRadius: 6,
  },
  screenTitle: {
    marginTop: 30,
    color: '#fff',
    fontSize: 32,
    textAlign: 'left',
    marginBottom: 20,
  }
});

export default Overview;