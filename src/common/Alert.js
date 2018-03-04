import React from 'react';
import { Alert } from 'react-native';

const showAlert = (alertTitle, alertMessage) => {
  Alert.alert(alertTitle, alertMessage, [{ text: 'OK' }], {
    cancelable: false,
  });
};

export default showAlert;
