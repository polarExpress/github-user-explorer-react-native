import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import { HomeScreen, SearchScreen, UserScreen } from './src/components/';

import { headerStyles } from './src/styles';

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Search: {
      screen: SearchScreen,
    },
    User: {
      screen: UserScreen,
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: headerStyles,
  },
);
export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
