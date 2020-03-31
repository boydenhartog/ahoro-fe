import React, { useState } from "react";
import { Animated, TouchableWithoutFeedback, StyleSheet } from "react-native";
import { useSpringColors } from "../../hooks/animation";

export default function Day(props) {
  const [animVal] = useState(new Animated.Value(1));
  const springIn = Animated.spring(animVal, { toValue: 1.3 });
  const springOut = Animated.spring(animVal, { toValue: 1 });
  const { bgColor, textColor } = useSpringColors(props.selected);

  return (
    <TouchableWithoutFeedback
      onPressIn={() => {
        springIn.start(), props.setDay(props.day);
      }}
      onPressOut={() => springOut.start()}
    >
      <Animated.View
        style={{
          ...styles.dayContainer,
          transform: [{ scale: animVal }],
          backgroundColor: bgColor
        }}
      >
        <Animated.Text style={{ color: textColor }}>{props.text}</Animated.Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  dayContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#F1F1F1",
    justifyContent: "center",
    alignItems: "center"
  }
});