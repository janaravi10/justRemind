import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import MenuBtn from "./MenuBtn";
import SettingBtn from "./SettingBtn";
import UploadBtn from "./UploadBtn";
export default class Menu extends Component {
  render() {
    return (
      <View style={styles.buttonPosition}>
        <SettingBtn />
        <UploadBtn />
        <MenuBtn />
      </View>
    );
  }
}
// style sheet for this component
const styles = StyleSheet.create({
  flexView: {flex:1},
  buttonPosition: {
    position: "absolute",
    bottom: 10,
    right: 10
  }
});
