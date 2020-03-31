import React, { useState, useEffect, ReactNode } from 'react';
import {
  Animated,
  ViewStyle,
  StyleSheet,
  TouchableWithoutFeedback
} from "react-native";

type overlayProps = {
  onClose: () => void,
  style?: ViewStyle,
  children?: ReactNode,
}

const Overlay = (props: overlayProps) => {
  const [fadeAnim] = useState(new Animated.Value(0));
 
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
    backgroundColor: '#808080',
    width: '100%',
    height: '100%',
    position: 'absolute',
    alignItems: 'center',
  },
});

export default Overlay;
