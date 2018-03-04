import React from 'react';
import { StyleSheet } from 'react-native';
import variables from './variables';

const userStyles = StyleSheet.create({
  userScreen: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  avatarWrapper: {
    alignItems: 'center',
  },
  userInfoWrapper: {
    flex: 2,
  },
  userInfoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    backgroundColor: variables.darkBlue,
    borderBottomColor: variables.yellow,
    borderBottomWidth: 3,
  },
  userInfoText: {
    color: variables.silver,
  },
});

export default userStyles;
