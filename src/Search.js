import React, { Component } from "react";
import { StyleSheet, Platform, Text, View } from "react-native";
import { Header, Icon, Input, Item } from "native-base";
import SearchBody from "./SearchBody";
import PokeLoader from "./PokeLoader";
import axios from "axios";
export default class Search extends Component {
  state = {
    pokeSearch: "",
    onCall: true,
    data: {}
  };

  searchPoke = () => {
    this.setState({ onCall: true });

    axios
      .get(
        "http://pokeapi.co/api/v2/pokemon/" +
          this.state.pokeSearch.toLowerCase()
      )
      .then(response => {
        console.log(response.data);
        this.setState({ data: response.data });
        this.setState({ onCall: false });
      })
      .catch(err => {
        console.log(err);
      });
  };

  renderBody = () => {
    if (this.state.onCall) {
      return <PokeLoader />;
    } else {
      return <SearchBody data={this.state.data} />;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" onPress={this.searchPoke} />
            <Input
              value={this.state.pokeSearch}
              placeholder="Search Pokemon"
              onChangeText={pokeSearch => this.setState({ pokeSearch })}
            />
          </Item>
        </Header>
        {this.renderBody()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
