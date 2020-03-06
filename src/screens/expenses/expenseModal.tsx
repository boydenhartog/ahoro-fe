import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import Modal from '../../components/modal';
import TextInput from '../../components/textinput';

export default function App() {
  const dispatch = useDispatch();

  return (
    <Modal
        title="Add expense"
        buttonText="Close modal"
        closeHandler={() => dispatch({ type: 'HIDE_EXPENSE_MODAL' })}
      >
        <Text style={styles.inputText}>Amount</Text>
        <TextInput type='number' />
        <Text style={styles.inputText}>Description</Text>
        <TextInput type='text' />
        <Text style={styles.inputText}>Currency</Text>
        <TextInput type='text' />
        <Text style={styles.inputText}>Date</Text>
        <TextInput type='text' />
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F7F7',
    alignItems: 'center',
  },
  inputText: {
    color: '#4A4A4A',
    fontSize: 16,
    marginBottom: 10,
  },
});