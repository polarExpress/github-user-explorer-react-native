import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import searchScreens from '../api/screens';
import { homeStyles, variables } from '../styles/';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={homeStyles.homeScreen}>
        <Text style={{ fontSize: 40, color: variables.darkBlue }}>
          Welcome to the Aurity Github searching app!
        </Text>
        {searchScreens.map(searchScreen => {
          return (
            <View style={homeStyles.homeListItem} key={searchScreen.id}>
              <Button
                color={variables.silver}
                title={searchScreen.buttonText}
                onPress={() => {
                  this.props.navigation.navigate('Search', {
                    searchType: searchScreen.screenAlias,
                    inputPlaceholder: searchScreen.inputPlaceholder,
                    apiUrl: searchScreen.apiURL,
                  });
                }}
              />
            </View>
          );
        })}
      </View>
    );
  }
}
