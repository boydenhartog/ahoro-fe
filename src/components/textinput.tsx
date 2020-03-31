import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

type InputProps = {
  defaultValue?: string,
  type: "text" | "number",
  placeholder: string,
  onChangeText: Function
};

function CustomInput(
  props: InputProps = {
    defaultValue: "PLACEHOLDER",
    type: "text",
    placeholder: "placeholder",
    onChangeText: () => {},
  }
) {
  // const [value, onChangeText] = useState(props.defaultValue);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={text => props.onChangeText(text)}
        // value={value}
        keyboardType={props.type === "number" ? "numeric" : "default"}
        placeholder={props.placeholder}
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