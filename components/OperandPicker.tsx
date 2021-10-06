import React, { Dispatch, SetStateAction } from "react";
import { Picker, StyleSheet } from "react-native";

interface OperandPickerProps {
  currentOperand: string;
  operands: string[];
  setter: Dispatch<SetStateAction<string>>;
}

const OperandPicker: React.FC<OperandPickerProps> = ({
  currentOperand,
  operands,
  setter,
}) => {
  return (
    <Picker
      selectedValue={currentOperand}
      style={styles.picker}
      onValueChange={(itemValue, itemIndex) => setter(itemValue)}
    >
      {operands.map((operand, key) => (
        <Picker.Item key={key} label={operand} value={operand} />
      ))}
    </Picker>
  );
};

const styles = StyleSheet.create({
  picker: {
    height: 10,
    width: 100,
    marginTop: -200,
  },
});

export default OperandPicker;
