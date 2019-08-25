import React, { Component } from "react";
import { ScrollView, StyleSheet, Text, Image, View } from "react-native";
import { ListItem, List } from "native=base";
import { View } from "native-base";

export default class SearchBody extends Component {
  render() {
    var pokemon = this.props.data;
    if (!pokemon) {
      return <View />;
    }
    console.log("seachingbody");
    console.log(pokemon);
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.header}>
          #{pokemon.id} - {pokemon.name.toUpperCase()}
        </Text>
        <View style={styles.viewStyle}>
          <Image
            source={{ uri: pokemon.sprites.front_default }}
            style={style.img}
          />
        </View>
        <View style={style.info}>
          <ListItem itemDivider />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    fontSize: 20,
    color: "red",
    textAlign: "center"
  },
  viewStyle: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  img: {
    height: 200,
    weight: 200,
    justifyContent: "center",
    alignItems: "center"
  },
  info: {
    flex: 1,
    backgroundColor: "white",
    opacity: 0.8
  }
});
