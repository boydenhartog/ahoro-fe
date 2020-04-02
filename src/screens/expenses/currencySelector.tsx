import React, { useState, useEffect } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { IFixerSymbols } from "../../hooks/fixerApi";
import RNPickerSelect from "react-native-picker-select";
import Icon from "react-native-vector-icons/FontAwesome";
import { Colors } from "../../styles";

export default function CurrenySelector(props: {
  symbols: IFixerSymbols;
  style?: ViewStyle;
  setValue: (name: string, value: string) => void;
}) {
  const [selectedValue, setSelectedValue] = useState("EUR");
  const symbolNames = Object.keys(props.symbols);

  const items = symbolNames.map((symbol) => {
    return { label: symbol, value: symbol };
  });

  useEffect(() => {
    props.setValue("currency", selectedValue);
  }, [selectedValue]);

  return (
    <View style={[props.style, styles.pickerContainer]}>
      <RNPickerSelect
        onValueChange={itemValue => setSelectedValue(itemValue)}
        items={items}
        value={selectedValue}
        style={{ inputIOS: styles.input, iconContainer: styles.iconContainer }}
        Icon={() => {
          return <Icon name="angle-down" size={30} color={Colors.primary} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  pickerContainer: {
    flex: 1,
    alignItems: "center",
    width: "100%"
  },
  input: {
    height: 40,
    borderColor: "#4A4A4A",
    borderWidth: 1,
    borderRadius: 6,
    paddingLeft: 10,
    color: "#4A4A4A",
    marginBottom: 16,
    width: "100%"
  },
  iconContainer: {
    marginRight: 8,
    marginTop: 5
  }
});
