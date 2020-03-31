import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';

const SlideView = (props) => {
  const [fadeAnim] = useState(new Animated.Value(0));
 
  useEffect(() => {
    Animated.spring(fadeAnim, { toValue: 1 }).start();
  });

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
        transform: [{
          translateY: fadeAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [50, 0]
          }),
        }],
      }}
    >
      {props.children}
    </Animated.View>
  );
}

export default SlideView;
