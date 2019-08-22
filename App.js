import React, { Component } from "react";
import { StyleSheet, Platform, Text, View } from "react-native";
import Landing from "./src/Landing";
import Search from "./src/Search";

export default class App extends Component {
  state = {
    currentScreen: "landing"
  };

  renderScreen = () => {
    if (this.state.currentScreen === "landing") {
      return <Landing switchScreen={this.switchScreen} />;
    } else if (this.state.currentScreen === "search") {
      return <Search />;
    }
  };

  switchScreen = currentScreen => {
    this.setState({ currentScreen });
  };

  render() {
    return <View style={styles.container}>{this.renderScreen()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 24 : 0 //if else statement if android 24px, ios 0
  }
});
