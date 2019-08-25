import React, { Component } from "react";
import { ScrollView, StyleSheet, Text, Image } from "react-native";
import { ListItem, List, View } from "native-base";

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
            style={styles.img}
          />
        </View>
        <View style={styles.info}>
          <ListItem itemDivider>
            <Text style={{ fontWeight: "bold" }}>Size</Text>
          </ListItem>
          <ListItem>
            <Text>Weight - {pokemon.weight}kg</Text>
          </ListItem>
          <ListItem>
            <Text>Height - {pokemon.height / 10}m</Text>
          </ListItem>
          <ListItem itemDivider>
            <Text style={{ fontWeight: "bold" }}>Abilities</Text>
          </ListItem>
          <List
            dataArray={pokemon.abilities}
            renderRow={item => (
              <ListItem>
                <Text>{item.ability.name}</Text>
              </ListItem>
            )}
            keyExtractor={(item, index) => index.toString()}
          ></List>
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
    width: 200,
    justifyContent: "center",
    alignItems: "center"
  },
  info: {
    flex: 1,
    backgroundColor: "white",
    opacity: 0.8
  }
});
