import React, { useEffect } from "react";
import { StyleSheet, View, Alert, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import moment from "moment";
import Modal from "../../components/modal";
import Overlay from "../../components/overlay";
import SlideView from "../../components/slideView";
import DateSelector from "./dateSelector";
import Button from "../../components/button";

type FormData = {
  amount: string;
  currency: string;
  date: string;
};


function getDate(selectedDayOfWeek: number) {
  const currentDayOfWeek = moment().isoWeekday();
  const difference = selectedDayOfWeek - currentDayOfWeek;

  return moment().add(difference, "days");
}

export default function ExpenseModal() {
  const { register, handleSubmit, setValue } = useForm<FormData>();
  const dispatch = useDispatch();

  useEffect(() => {
    register('amount');
    register('currency');
    register('date');
  }, [register])

  const onSubmit = ({ amount, currency, date }) => {
    const realDate = getDate(date);

    Alert.alert(
      "Form Data",
      `amount: ${amount} \n 
      currencty: ${currency} \n 
      realDate: ${realDate.format("dddd, MMMM Do YYYY, h:mm:ss a")}`
    );
  }

  return (
    <>
      <Overlay
        onClose={() => dispatch({ type: "HIDE_EXPENSE_MODAL" })}
      ></Overlay>
      <SlideView style={styles.modalContainer}>
        <Modal
          title="add expense"
          buttonText="Close modal"
          closeHandler={() => dispatch({ type: "HIDE_EXPENSE_MODAL" })}
        >
          <TextInput
            keyboardType={"numeric"}
            placeholder="amount"
            onChangeText={number => {
              setValue("amount", number);
            }}
            style={styles.input}
          />
          <TextInput
            keyboardType={"default"}
            placeholder="currency"
            onChangeText={text => {
              setValue("currency", text);
            }}
            style={styles.input}
          />
          
          <DateSelector setValue={setValue} />

          <View style={styles.buttonContainer}>
            <Button
              text={"add expense"}
              pressHandler={handleSubmit(onSubmit)}
            />
          </View>
        </Modal>
      </SlideView>
    </>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    marginTop: 40,
    padding: 20,
    flex: 1,
    top: 0,
    position: "absolute",
    zIndex: 10,
    backgroundColor: "#FFF",
    borderRadius: 6
  },
  inputText: {
    color: "#4A4A4A",
    fontSize: 16,
    marginBottom: 10
  },
  buttonContainer: {
    display: "flex",
    marginTop: 20,
    alignItems: "center"
  },
  input: {
    height: 40, 
    borderColor: '#4A4A4A', 
    borderWidth: 1, 
    borderRadius: 6,
    paddingLeft: 10,
    color: '#4A4A4A',
    marginBottom: 8,
  }
});
