import React, { useEffect, useState } from "react";
import { StyleSheet, Alert, TextInput, View, Text } from "react-native";
import { useForm } from "react-hook-form";
import moment from "moment";
import { IFixerSymbols } from "../../hooks/fixerApi";
import Button from "../../components/button";
import MotionBlock from "../../components/motionBlock";
import { Typography, Views } from "../../styles";
import CurrenySelector from "./currencySelector";
import DateSelector from "./dateSelector";

type FormData = {
  amount: string;
  currency: string;
  date: string;
  shortDescription: string;
};

function getDate(selectedDayOfWeek: number) {
  const currentDayOfWeek = moment().isoWeekday();
  const difference = selectedDayOfWeek - currentDayOfWeek;

  return moment().add(difference, "days");
}

interface FormProps {
  symbols: IFixerSymbols;
}

export default function Form({ symbols }: FormProps) {
  const { register, handleSubmit, setValue } = useForm<FormData>();
  const onSubmit = ({ amount, currency, date }) => {
    const realDate = getDate(date);

    Alert.alert(
      "Form Data",
      `amount: ${amount} \n 
      currencty: ${currency} \n 
      realDate: ${realDate.format("dddd, MMMM Do YYYY, h:mm:ss a")}`
    );
  };

  useEffect(() => {
    register("amount");
    register("currency");
    register("date");
    register("shortDescription");
  }, [register]);

  return (
    <>
      <MotionBlock delay={50}>
        <Text style={Typography.title}>Add expense</Text>
      </MotionBlock>
      <MotionBlock delay={75}>
        <TextInput
          keyboardType={"default"}
          placeholder="What?"
          onChangeText={string => {
            setValue("shortDescription", string);
          }}
          style={Views.defaultInput}
        />
      </MotionBlock>

      <View style={styles.inputRow}>
        <MotionBlock delay={100} style={{ flex: 3, marginRight: 8 }}>
          <TextInput
            keyboardType={"numeric"}
            placeholder="Amount"
            onChangeText={number => {
              setValue("amount", number);
            }}
            style={[Views.defaultInput, styles.amountInput]}
          />
        </MotionBlock>
        <MotionBlock delay={125} style={{ flex: 1 }}>
          <CurrenySelector symbols={symbols} setValue={setValue} />
        </MotionBlock>
      </View>

      <MotionBlock delay={150}>
        <DateSelector setValue={setValue} />
      </MotionBlock>

      <MotionBlock delay={175} style={styles.buttonContainer}>
        <Button text={"add expense"} pressHandler={handleSubmit(onSubmit)} />
      </MotionBlock>
    </>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    display: "flex",
    marginTop: 20,
    alignItems: "center"
  },
  inputRow: {
    flexDirection: "row"
  },
  amountInput: {
    width: "100%"
  }
});