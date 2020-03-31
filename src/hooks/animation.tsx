import { useState, useEffect } from "react";
import { Animated } from "react-native";
import { Colors } from "../styles";

export function useSpringColors(
  selected: boolean, 
  color1: string = Colors.unselectedRGB, 
  color2: string = Colors.primaryRGB
) {
  const [colorVal] = useState(new Animated.Value(0));
  const bgColor = colorVal.interpolate({
    inputRange: [0, 1],
    outputRange: [color1, color2]
  });
  const textColor = colorVal.interpolate({
    inputRange: [0, 1],
    outputRange: [color2, color1]
  });

  useEffect(() => {
    if (selected) {
      Animated.spring(colorVal, { toValue: 1 }).start();
    } else {
      Animated.spring(colorVal, { toValue: 0 }).start();
    }
  }, [selected]);

  return { bgColor: bgColor, textColor: textColor };
};