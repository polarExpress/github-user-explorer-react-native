# GitHub search app

Created to see react-native possibilities.

There are four possibilities for searching through GitHub:

* searching for organizations and showing their members,
* searching for repositories and showing their contributors,
* searching for users,
* searching for repositories using keywords and showing their contributors and owner

Results are always users or organizations (owners) and by tapping user name, details of specific user are shown.

Users are shown in infinite scroll list so every time you reach the end of the list, more items are fetched from the server.

## Setup

App should run with two simple commands after code is cloned from this repo.

Install all dependencies:

```
npm install
```

Run the app:

```
npm start
```

## Running app on device

Install the [Expo](https://expo.io/) client app on your iOS or Android phone and connect to the same wireless network as your computer. Using the Expo app, scan the QR code from your terminal to open your project.
