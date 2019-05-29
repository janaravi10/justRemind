import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
export default class UploadBtn extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{marginBottom: 10,marginTop: 0}}>
        <Text style={styles.textLabel}>Upload</Text>
        <TouchableOpacity style={[styles.buttonRounded]} activeOpacity={0.7}>
          <Image source={require("../res/icon/upload.png")} />
        </TouchableOpacity>
      </View>
    );
  }
}
// style sheet for this component
const styles = StyleSheet.create({
  textLabel: {
    position: "relative",right: 60,top: 40
  },
  buttonRounded: {
    padding: 5,
    backgroundColor: "#fff",
    borderRadius: 50
  }
});
