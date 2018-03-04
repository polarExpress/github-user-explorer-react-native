const searchScreens = [
  {
    id: 1,
    buttonText: 'Search for users based on their organization membership',
    screenAlias: 'organizationName',
    screenTitle: 'Organization',
    inputPlaceholder: 'Insert organization name...',
    apiURL: 'GET_ORGANIZATION_MEMBERS',
  },
  {
    id: 2,
    buttonText: 'Search for users based on their contributions to repository',
    screenAlias: 'repositoryName',
    screenTitle: 'Repository',
    inputPlaceholder: 'Insert repository name (org/repo)...',
    apiURL: 'GET_REPO_CONTRIBUTORS',
  },
  {
    id: 3,
    buttonText: 'Search for users based on their name',
    screenAlias: 'userName',
    screenTitle: 'User',
    inputPlaceholder: 'Insert user first/last name or username...',
    apiURL: 'SEARCH_USER',
  },
  {
    id: 4,
    buttonText: 'Search for repositories and their owners and contributors',
    screenAlias: 'searchText',
    screenTitle: 'Keyword',
    inputPlaceholder: 'Insert keyword...',
    apiURL: 'SEARCH_REPOS',
  },
];

export default searchScreens;
