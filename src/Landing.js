import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  ImageBackground
} from "react-native";
import { Button } from "native-base";

var background = require("../assets/icons/landing.jpg");
export default class Landing extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={background}
          resizeMode="contain"
          style={{ width: "100%", height: "100%" }}
        >
          <View style={styles.viewStyle}>
            <Text>Welcome to pokesearch</Text>
            <Button
              block
              style={styles.buttonStyle}
              onPress={() => {
                this.props.switchScreen("search");
              }}
            >
              <Text style={styles.buttonText}>Let's go</Text>
            </Button>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 24 : 0 //if else statement if android 24px, ios 0
  },
  viewStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonStyle: {
    margin: 10
  },
  buttonText: {
    color: "white"
  }
});
