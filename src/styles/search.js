import React from 'react';
import { StyleSheet } from 'react-native';
import variables from './variables';

const searchStyles = StyleSheet.create({
  searchScreen: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  searchInput: {
    height: 40,
    backgroundColor: '#fff',
    color: '#34495E',
    padding: 2,
  },
  searchButtonWrapper: {
    height: 40,
    backgroundColor: '#fff',
  },
  searchResults: {
    flex: 2,
  },
  searchResultsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    backgroundColor: variables.darkBlue,
    borderBottomColor: variables.yellow,
    borderBottomWidth: 3,
  },
});

export default searchStyles;
