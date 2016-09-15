import React, { Component } from 'react';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/MessageSceneStyles';


var PhotoButton = (props) => (
  <Button onPress={props.handlePhotoPress}>
    <Icon style={ [styles.footerContent, styles.footerPhoto] } name="add-a-photo" />
  </Button>
)

module.exports = PhotoButton;