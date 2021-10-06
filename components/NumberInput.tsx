import React, { Dispatch, MutableRefObject, Ref, SetStateAction } from "react";
import { TextInput, StyleSheet } from "react-native";

interface NumberInputProps {
  setter: Dispatch<SetStateAction<string>>;
  prompt: string;
  value: string;
}

const NumberInput: React.FC<NumberInputProps> = ({ setter, prompt, value }) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      keyboardType="numeric"
      onChangeText={(num) => setter(num)}
      placeholder={`${prompt}`}
      maxLength={8}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    fontSize: 18,
    width: 170,

    textAlign: "center",
  },
});

export default NumberInput;
