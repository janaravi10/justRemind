import React, { Component } from "react";
import {  StyleSheet, View } from "react-native";
import Header from "./components/Header";
import Menu from "./components/Menu";
export default class App extends Component {
  render() {
    return (
      <View style={styles.stretch}>
        <Header />
        <Menu />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  stretch: {
    flex: 1
  }
});
