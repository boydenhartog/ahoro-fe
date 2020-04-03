import React, { useRef, useEffect, ReactNode } from "react";
import {
  Animated,
  ViewStyle,
  StyleSheet,
  TouchableWithoutFeedback
} from "react-native";
import { Colors } from '../styles';

type overlayProps = {
  onClose: () => void,
  style?: ViewStyle,
  children?: ReactNode,
}

const Overlay = (props: overlayProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
 
  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 0.75,
        duration: 200,
      }
    ).start();
  });

  return (
    <TouchableWithoutFeedback onPress={() => props.onClose()}>
      <Animated.View
        style={{
          ...props.style,
          ...styles.overlay,
          opacity: fadeAnim
        }}
      >
        {props.children}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: Colors.darkGrey,
    width: "100%",
    height: "110%",
    position: "absolute",
    alignItems: "center"
  }
});

export default Overlay;
