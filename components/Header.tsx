import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as globalstyle from "../globalstyle";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <View style={styles.header}>
      <Text style={[styles.logo, globalstyle.styles.main_color]}>
        Basic Calculator
      </Text>
      <View style={styles.logo_bottom_container}>
        <View style={[styles.logo_bottom, styles.red]} />
        <View style={[styles.logo_bottom, styles.blue]} />
        <View style={[styles.logo_bottom, styles.green]} />
        <View style={[styles.logo_bottom, styles.yellow]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: -200,
  },
  logo: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  logo_bottom: {
    height: 4,
    width: 55,
  },
  logo_bottom_container: {
    flexDirection: "row",
  },
  red: {
    backgroundColor: "#e74c3c",
  },
  blue: {
    backgroundColor: "#3498db",
  },
  green: {
    backgroundColor: "#2ecc71",
  },
  yellow: {
    backgroundColor: "#f1c40f",
  },
});

export default Header;
