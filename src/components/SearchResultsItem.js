import React, { Component } from 'react';
import { Button, View, Image } from 'react-native';
import { searchStyles, variables } from '../styles/';

export default class SearchResultItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { resultItem, navigation } = this.props;

    return (
      <View style={searchStyles.searchResultsItem}>
        <Image
          style={{ width: 47, height: 47 }}
          source={{ uri: resultItem.avatar_url }}
        />
        <View>
          <Button
            title={resultItem.login}
            color={variables.silver}
            onPress={() => {
              navigation.navigate('User', {
                username: resultItem.login,
              });
            }}
          />
        </View>
      </View>
    );
  }
}
