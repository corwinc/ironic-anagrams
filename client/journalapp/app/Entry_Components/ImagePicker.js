import React, { Component } from 'react';
import PhotoButton from './PhotoButton';
import imagePicker from 'react-native-image-picker';

var ImagePicker = require('react-native-image-picker');

var picker = {
  options: {
    title: 'Select Photos',
    customButtons: [
      {name: 'fb', title: 'Choose Photo from Facebook'},
    ],
    storageOptions: {
      skipBackup: true,
      path: 'images'
    }
  }


};

module.exports = picker;
