import React, { Component } from 'react';
import { Text, View, FlatList, ActivityIndicator } from 'react-native';
import { SearchResultsItem } from './';
import { searchStyles } from '../styles';

export default class SearchResults extends Component {
  constructor(props) {
    super(props);
  }

  renderFooter = () => {
    if (!this.props.isLoading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: '#CED0CE',
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  render() {
    const { searchResults, fetchData } = this.props;
    if (searchResults && !searchResults.length) {
      return <View style={searchStyles.searchResults} />;
    }

    return (
      <View style={searchStyles.searchResults}>
        <FlatList
          data={searchResults}
          renderItem={({ item }) => (
            <SearchResultsItem
              resultItem={item.hasOwnProperty('owner') ? item.owner : item}
              navigation={this.props.navigation}
            />
          )}
          keyExtractor={item => item.id}
          onEndReached={fetchData}
          onEndReachedThreshold={0}
          ListFooterComponent={this.renderFooter}
        />
      </View>
    );
  }
}
