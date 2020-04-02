import React from 'react';
import { StyleSheet, View, StatusBar } from "react-native";
import { useSelector } from 'react-redux';
import Overview from './overview';
import Navbar from '../components/navbar';
import ExpenseModal from './expenses/expenseModal';
import { Colors } from "../styles";


export default function Home() {
  const ui = useSelector(state => state.ui);

  return (
    <View style={styles.container}>
      <Overview />
      <Navbar />
      <StatusBar backgroundColor={"blue"} />

      {ui.showExpenseModal && <ExpenseModal />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    alignItems: 'center',
  },
});