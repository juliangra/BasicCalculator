import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Alert, Button, StyleSheet, View, Text } from "react-native";
import Header from "./components/Header";
import NumberInput from "./components/NumberInput";
import OperandPicker from "./components/OperandPicker";
import Modal from "react-native-modal";

export default function App() {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [firstNum, setFirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");
  const [resultString, setResultString] = useState("");

  const [operand, setOperand] = useState("+");

  const toggleModal = () => {
    setModalVisibility(!modalVisibility);
  };

  const handleCalculate = () => {
    const firstValue = parseFloat(firstNum.replace(",", "."));
    const secondValue = parseFloat(secondNum.replace(",", "."));

    if (
      firstNum == "" ||
      isNaN(firstValue) ||
      secondNum == "" ||
      isNaN(secondValue)
    ) {
      Alert.alert("Error", "Please enter both numbers");
      return;
    }

    let result = 0;

    switch (operand) {
      case "+":
        result = firstValue + secondValue;
        break;

      case "-":
        result = firstValue - secondValue;
        break;

      case "*":
        result = firstValue * secondValue;
        break;

      case "/":
        result = firstValue / secondValue;
        break;
    }

    if (result % 1 != 0) {
      result = parseFloat(result.toFixed(4));
    }

    toggleModal();

    setResultString(`${firstValue} ${operand} ${secondValue} = ${result}`);
  };

  const handleCE = () => {
    setFirstNum("");
    setSecondNum("");

    setOperand("+");
  };

  return (
    <>
      <View style={styles.container}>
        <Header />

        <Modal isVisible={modalVisibility}>
          <View style={styles.modal}>
            <Text style={styles.result}>{resultString}</Text>
          </View>
          <View style={styles.modal_actions}>
            <Button onPress={toggleModal} title="Done" />
          </View>
        </Modal>

        <View style={styles.body}>
          <View style={styles.input_container}>
            <NumberInput setter={setFirstNum} prompt="First" value={firstNum} />
            <OperandPicker
              currentOperand={operand}
              operands={["+", "-", "*", "/"]}
              setter={setOperand}
            />

            <NumberInput
              setter={setSecondNum}
              prompt="Second"
              value={secondNum}
            />
          </View>
          <View style={styles.button_container}>
            <Button onPress={handleCalculate} title="Calculate" />
            <Button onPress={handleCE} title="Clear" />
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    flex: 1,
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
  modal_actions: {
    backgroundColor: "#fff",
    paddingBottom: 20,
  },
  result: {
    fontSize: 25,
    marginTop: 40,
    textAlign: "center",
  },
  input_container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 60,
  },
  button_container: {
    width: 200,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 25,
  },
  input: {
    height: 40,
    margin: 12,
    paddingLeft: 40,
    paddingRight: 40,
    fontSize: 18,
  },
});
