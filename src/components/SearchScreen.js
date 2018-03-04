import React, { Component } from 'react';
import { Text, View, Button, TextInput, ActivityIndicator } from 'react-native';
import { SearchResults } from './';
import { searchStyles, variables } from '../styles/';
import { showAlert } from '../common/';
import getData from '../api/';

export default class SearchScreen extends Component {
  static navigationOptions = {
    title: 'Search',
  };
  constructor(props) {
    super(props);

    const { params } = props.navigation.state;
    const { searchType, apiUrl } = params;

    this.state = {
      apiUrl,
      searchType,
      searchText: '',
      searchResults: [],
      isLoading: false,
      pageNum: 1,
    };

    this.search = this.search.bind(this);
    this.loadMoreData = this.loadMoreData.bind(this);
  }

  repositoryNameCheck(repoName) {
    const regex = /.+\/.+/g;
    if (!regex.test(repoName)) {
      showAlert(
        'Search term format is wrong!',
        `Searching for repository should include also organization name.
          \nExample: organization/repository = facebook/react`,
      );
      return false;
    } else {
      return true;
    }
  }

  search() {
    const { searchText, searchType } = this.state;
    if (
      searchType == 'repositoryName' &&
      !this.repositoryNameCheck(searchText)
    ) {
      return;
    } else {
      this.makeDataRequest();
    }
  }

  loadMoreData() {
    this.setState(
      {
        pageNum: this.state.pageNum + 1,
      },
      () => this.makeDataRequest(),
    );
  }

  makeDataRequest() {
    const { apiUrl, pageNum, searchText } = this.state;
    this.setState({ isLoading: true });
    getData(apiUrl, searchText, pageNum).then(searchResults => {
      this.setState({
        isLoading: false,
        searchResults:
          pageNum == 1
            ? searchResults
            : [...this.state.searchResults, ...searchResults],
      });
    });
  }

  render() {
    const { params } = this.props.navigation.state;
    const { inputPlaceholder } = params;

    return (
      <View style={searchStyles.searchScreen}>
        <View>
          <TextInput
            style={searchStyles.searchInput}
            placeholder={inputPlaceholder}
            onChangeText={inputText =>
              this.setState({ searchText: inputText.toLowerCase().trim() })
            }
          />

          <View style={searchStyles.searchButtonWrapper}>
            <Button
              title="Search"
              onPress={this.search}
              disabled={!this.state.searchText ? true : false}
              color={variables.darkBlue}
            />
          </View>
        </View>

        <SearchResults
          searchResults={this.state.searchResults}
          navigation={this.props.navigation}
          fetchData={this.loadMoreData}
          isLoading={this.state.isLoading}
        />
      </View>
    );
  }
}
