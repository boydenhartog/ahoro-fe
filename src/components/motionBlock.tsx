import React, { useState, useEffect, ReactNode } from "react";
import { Animated, ViewStyle } from "react-native";

type MotionProps = {
  style?: ViewStyle;
  delay?: number;
  children?: ReactNode;
};

const MotionBlock = (props: MotionProps = { style: {}, delay: 0 }) => {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.spring(fadeAnim, {
      toValue: 1,
      delay: props.delay,
      useNativeDriver: true
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
        transform: [
          {
            translateY: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [50, 0]
            })
          }
        ]
      }}
    >
      {props.children}
    </Animated.View>
  );
};

export default MotionBlock;
