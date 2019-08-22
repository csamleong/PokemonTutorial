import React, { Component } from "react";
import { StyleSheet, Platform, Text, View } from "react-native";
export default class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Search</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 24 : 0 //if else statement if android 24px, ios 0
  }
});
