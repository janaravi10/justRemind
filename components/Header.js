import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.brandName}>Just Remind</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    width: "100%",
    backgroundColor: "#12CBC4",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
  },
  brandName: {
    paddingLeft: 5,
    fontWeight: "bold",
    position: "relative",
    top: 8,
    color: "#FFF",
    fontSize: 22
  }
});
