import React, { useEffect } from "react";
import { StyleSheet, Alert, TextInput, View } from "react-native";
import { useForm } from "react-hook-form";
import moment from "moment";
import { useDispatch } from "react-redux";
import { IFixerSymbols } from "../../hooks/fixerApi";
import Button from "../../components/button";
import MotionBlock from "../../components/motionBlock";
import { Views } from "../../styles";
import CurrenySelector from "./currencySelector";
import DateSelector from "./dateSelector";
import { addExpense } from "../../store/actions/expenses";


type FormData = {
  amount: string;
  currency: string;
  dayOfWeek: number;
  shortDescription: string;
};

function getDate(selectedDayOfWeek: number) {
  const currentDayOfWeek = moment().isoWeekday();
  const difference = selectedDayOfWeek - currentDayOfWeek;

  return moment().add(difference, "days");
}

interface FormProps {
  symbols: IFixerSymbols;
  onClose: () => void;
}

export default function Form({ symbols, onClose }: FormProps) {
  const { register, handleSubmit, setValue } = useForm<FormData>();
  const dispatch = useDispatch();

  const onSubmit = ({ amount, currency, dayOfWeek, shortDescription }) => {
    const date = getDate(dayOfWeek);
    dispatch(addExpense({ amount, currency, date, shortDescription }));
    onClose();
  };

  useEffect(() => {
    register("amount");
    register("currency");
    register("dayOfWeek");
    register("shortDescription");

    // Bug in picker package, doesn't set default value
    setValue("currency", "EUR");
  }, [register]);

  return (
    <>
      <MotionBlock delay={75}>
        <TextInput
          keyboardType={"default"}
          placeholder="What?"
          onChangeText={string => {
            setValue("shortDescription", string);
          }}
          style={Views.defaultInput}
          autoFocus
        />
      </MotionBlock>

      <View style={styles.inputRow}>
        <MotionBlock delay={100} style={styles.amountInputContainer}>
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
  },
  amountInputContainer: {
    flex: 3,
    marginRight: 8
  }
});
