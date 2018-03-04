const ROOT_API = 'https://api.github.com/';

const API_URLS = {
  GET_ORGANIZATION_MEMBERS(organizationName, pageNum) {
    return `${ROOT_API}orgs/${organizationName.trim()}/members?page=${pageNum}`;
  },
  GET_REPO_CONTRIBUTORS(searchText, pageNum) {
    let [organizationName, repositoryName] = searchText.split('/');
    return `${ROOT_API}repos/${organizationName.trim()}/${repositoryName.trim()}/contributors?page=${pageNum}`;
  },
  SEARCH_USER(searchText, pageNum) {
    return `${ROOT_API}search/users?q=${searchText.trim()}&page=${pageNum}`;
  },
  SEARCH_REPOS(searchText, pageNum) {
    return `${ROOT_API}search/repositories?q=${searchText.trim()}&sort=stars&order=desc&page=${pageNum}`;
  },
  GET_USER(userName) {
    return `${ROOT_API}users/${userName.trim()}`;
  },
};

async function getData(apiUrl, value, pageNum) {
  console.log(API_URLS[apiUrl](value, pageNum));
  try {
    let response = await fetch(API_URLS[apiUrl](value, pageNum));
    let responseJson = await response.json();
    if (!Array.isArray(responseJson) && apiUrl != 'GET_USER') {
      return responseJson.items;
    }
    return responseJson;
  } catch (error) {
    throw new Error(error);
  }
}

export default getData;
