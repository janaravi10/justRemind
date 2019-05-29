import React, { Component } from "react";
import {  StyleSheet, TouchableOpacity, Image } from "react-native";
export default class MenuBtn extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }
  // press event handler
  _onPressButton() {
    this.setState(prevState => {
      return { clicked: !prevState.clicked };
    });
  }
  render() {
    return (
      <TouchableOpacity
        style={[styles.buttonRounded]}
        activeOpacity={0.7}
        onPress={this._onPressButton.bind(this)}
      >
        <Image
          source={
            this.state.clicked
              ? require("../res/icon/close.png")
              : require("../res/icon/burgerMenu.png")
          }
        />
      </TouchableOpacity>
    );
  }
}
// style sheet for this component
const styles = StyleSheet.create({
  buttonRounded: {
    padding: 5,
    backgroundColor: "#fff",
    borderRadius: 50
  }
});
