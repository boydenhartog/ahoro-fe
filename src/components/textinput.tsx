import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

type InputProps = {
  defaultValue: String,
}

function CustomInput(props: InputProps = { defaultValue: 'PLACEHOLDER'}) {
  const [value, onChangeText] = useState(props.defaultValue);

  return (
      <View
        style={styles.container}
      >
      <TextInput
        style={styles.input}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
  },
  input: {
    height: 40, 
    borderColor: '#4A4A4A', 
    borderWidth: 1, 
    borderRadius: 6,
    paddingLeft: 10,
    color: '#4A4A4A',
  }
});

export default CustomInput;