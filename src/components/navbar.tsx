import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';

function NavBar() {
  const dispatch = useDispatch();

  return (
    <View style={sheet.flexContainer}>
      <View style={sheet.flexButton}><Text style={sheet.buttonText}>Button</Text></View>
      <View style={sheet.flexButton}><Text style={sheet.buttonText}>Button</Text></View>
      <TouchableOpacity onPress={() => dispatch({ type: 'SHOW_EXPENSE_MODAL' })}>
        <View style={sheet.addButton}>
          <Text style={sheet.addButtonText}>+</Text>
        </View>
      </TouchableOpacity>
      <View style={sheet.flexButton}><Text style={sheet.buttonText}>Button</Text></View>
      <View style={sheet.flexButton}><Text style={sheet.buttonText}>Button</Text></View>
    </View>
  );
}

const sheet = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    backgroundColor: '#fff',
    width: '100%',
    height: 60,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexButton: {
    flex: 1,
    backgroundColor: 'yellow',
    zIndex: 5,
  },
  buttonText: {
    color: 'blue',
  },
  addButton: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 32,
  }
});

export default NavBar;