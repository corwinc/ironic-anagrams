import React, { Component } from 'react';
import PhotoButton from './PhotoButton';

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  AsyncStorage,
  Navigator,
  Dimensions,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/MessageSceneStyles';
import imagePicker from 'react-native-image-picker';

var ImagePicker = require('react-native-image-picker');

// Note that this is a scene, not a tab view. In this case, that means the user clicked on "What did you do today?" in 
// EntriesTab.js. EntriesTab then tells Main.js to navigate to this scene. 
export default class MessageScene extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      dynamicHeight: () => { return {height: Dimensions.get('window').height - 49 - 70 - 300}}
    };
  };

  componentDidMount(){
    this.props.updateEntry('');
  }

  // This shrinks the container to accommodate the keypad, when the user clicks the text input
  // to begin his/her entry. The footer is thus effectively pulled up the view. 
  moveUpForKeyboardShow(){
    setTimeout( ()=> {
      this.setState(
        { dynamicHeight : () => { return { height: Dimensions.get('window').height * .45 }} }
      );
    }, 200); 
  }

  // When the user clicks out of the text input but remains on this view, this resets the container
  // back to its original size, effectively pushing the footer back down. 
  moveDownForKeyboardHide(){
    this.setState(
      { dynamicHeight : () => { return {height: Dimensions.get('window').height - 49 - 70}} }
    );
  }

  render() {
    return (
      <ScrollView style={ styles.container } ref='scrollView'>
      <TextInput
        keyboardType='default'
        keyboardAppearance='light' 
        multiline={ true }
        placeholder= 'What did you do today?'
        style={ [this.state.dynamicHeight(), styles.bodyWidth, styles.fadedText] }
        maxLength={ 100 }
        onChangeText={ (text) => this.props.updateEntry(text) }
        onFocus= { this.moveUpForKeyboardShow.bind(this) }
        onBlur= { this.moveDownForKeyboardHide.bind(this) }/>
        <Image source={this.props.newEntryPhotos} style={{width: 300, height: 300}} />
        <View style={ [styles.bodyWidth, styles.footer] }>
          <PhotoButton handlePhotoPress={this.props.handlePhotoPress} />
          <Icon style={ [styles.footerContent, styles.footerPadlock] } name="lock-open"/>
          <Icon style={ [styles.footerContent, styles.footerArrow] } name="near-me"/>
          <Text style={ [styles.footerContent, styles.footerText] }>{ this.props.location }</Text>
        </View>
      </ScrollView>
    )
  }
}


