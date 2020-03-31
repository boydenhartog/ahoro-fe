import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import moment from "moment";
import { Colors } from "../../styles";
import Day from "./day";

const Days = [
  { text: "m", day: 1 },
  { text: "t", day: 2 },
  { text: 'w', day: 3 },
  { text: 't', day: 4 },
  { text: 'f', day: 5 },
  { text: 's', day: 6 },
  { text: 's', day: 7 },
];

type DateSelectorProps = {
  setValue: Function
};

export default function DateSelector({ setValue }) {
  const currentDay = moment().isoWeekday();
  const [selectedDay, setDay] = useState(currentDay);

  const selectDay = (day: number) => {
    setDay(day);
    setValue('date', day);
  }
  
  return (
    <View style={styles.container}>
      <Text></Text>
      {Days.map(({ day, text }) => (
        <Day
          key={day}
          day={day}
          text={text}
          selected={day === selectedDay}
          setDay={selectDay}
        />
      ))}
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  dayContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#F1F1F1",
    justifyContent: "center",
    alignItems: "center"
  }
});
