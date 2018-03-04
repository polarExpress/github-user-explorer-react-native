import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View, Image } from 'react-native';
import getData from '../api/';
import { userStyles } from '../styles';

export default class UserScreen extends Component {
  constructor(props) {
    const { params } = props.navigation.state;
    const { username } = params;

    super(props);
    this.state = {
      isLoading: true,
      username,
      user: {},
    };
  }

  componentDidMount() {
    getData('GET_USER', this.state.username).then(searchResults => {
      this.setState({ isLoading: false });
      this.setState({ user: searchResults });
    });
  }

  render() {
    const { user } = this.state;

    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={userStyles.userScreen}>
        <View style={userStyles.avatarWrapper}>
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: user.avatar_url }}
          />
        </View>
        <View style={userStyles.userInfoWrapper}>
          {['name', 'login', 'location', 'blog', 'type'].map(
            (propertyName, index) => (
              <View key={index} style={userStyles.userInfoItem}>
                <Text style={userStyles.userInfoText}>
                  {propertyName}: {user[propertyName]}
                </Text>
              </View>
            ),
          )}
        </View>
      </View>
    );
  }
}
