import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import moment from "moment";
import MotionBlock from "../../components/motionBlock";
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

interface DateSelectorProps<T> {
  setValue: (name: string, value: T) => void
};

export default function DateSelector({ setValue }: DateSelectorProps<number>) {
  const currentDay = moment().isoWeekday();
  const [selectedDay, setDay] = useState(currentDay);

  const selectDay = (day: number) => {
    setDay(day);
    setValue('date', day);
  }
  
  return (
    <View style={styles.container}>
      {Days.map(({ day, text }, index) => (
        <MotionBlock delay={index * 30} key={day}>
          <Day
            day={day}
            text={text}
            selected={day === selectedDay}
            setDay={selectDay}
          />
        </MotionBlock>
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
