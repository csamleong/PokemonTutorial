import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";
import { View, Text } from "native-base";
export default class PokeLoader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={require("../assets/pikachu_loading.gif")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  img: {
    height: 250,
    width: 250,
    justifyContent: "center",
    alignItems: "center"
  }
});
