import React, { useState } from 'react';
import { TouchableOpacity, Image, Platform, TextInput } from 'react-native';
import { View, StyleSheet, Text } from 'react-native';
import { Keyboard, KeyboardAvoidingView } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import { Camera, CameraType } from 'expo-camera';

import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { fix } from '../services/constants';

const initialFormValue = { tittle: '', location: '' };
const image = require('../assets/img/image-sunset.jpg');

export const CreatePostsScreen = () => {
  // const [type, setType] = useState(CameraType.back);
  const [{ tittle, location }, setFormValue] = useState(initialFormValue);
  const [isKeyboard, setIsKeyboard] = useState(false);
  const [onFocus, setOnFocus] = useState('');
  const [cameraRef, setCameraRef] = useState(null);

  // function toggleCameraType() {
  //   setType(current =>
  //     current === CameraType.back ? CameraType.front : CameraType.back
  //   );
  // }

  const hideKeyboard = () => {
    setOnFocus('');
    setIsKeyboard(false);
    Keyboard.dismiss();
  };

  const takeImage = async () => {
    console.log(cameraRef);
  };

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <View style={styles.mainContainer}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'position' : 'height'}
        >
          <View style={styles.hero}>
            <Camera style={styles.imageContainer} ref={setCameraRef}>
              {/* <Image style={styles.image} source={image} /> */}
              <View style={styles.camera}>
                <TouchableOpacity onPress={takeImage}>
                  <FontAwesome name="camera" size={24} color={'#BDBDBD'} />
                </TouchableOpacity>
              </View>
            </Camera>

            <Text style={styles.imageAction}>Edit image</Text>
            <TextInput
              style={{
                ...styles.imageDetail,
                borderBottomWidth: 1,
                borderColor: onFocus === fix.TITLE ? '#FF6C00' : '#E8E8E8',
              }}
              textContentType="jobTitle"
              value={tittle}
              placeholder="Tittle..."
              onFocus={() => {
                setIsKeyboard(true);
                setOnFocus(fix.TITLE);
              }}
              onBlur={() => hideKeyboard()}
              onChangeText={value =>
                setFormValue(prevState => ({ ...prevState, tittle: value }))
              }
            />

            <View
              style={{
                ...styles.detail,
                borderColor: onFocus === fix.LOCATION ? '#FF6C00' : '#E8E8E8',
              }}
            >
              <Feather name="map-pin" size={20} color="#BDBDBD" />
              <TextInput
                style={{ ...styles.imageDetail, marginLeft: 5 }}
                textContentType="location"
                value={location}
                placeholder="Location..."
                onFocus={() => {
                  setIsKeyboard(true);
                  setOnFocus(fix.LOCATION);
                }}
                onBlur={() => hideKeyboard()}
                onChangeText={value =>
                  setFormValue(prevState => ({ ...prevState, location: value }))
                }
              />
            </View>

            <TouchableOpacity
              style={{
                ...styles.button,
                backgroundColor: tittle ? '#FF6C00' : '#F6F6F6',
              }}
            >
              <Text
                style={{
                  ...styles.mainText,
                  color: tittle ? '#FFFFFF' : '#BDBDBD',
                }}
              >
                Post
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>

        <TouchableOpacity
          style={{
            ...styles.trashBtn,
            backgroundColor: tittle ? '#FF6C00' : '#F6F6F6',
          }}
        >
          <Feather
            name="trash-2"
            size={20}
            color={tittle ? '#FFFFFF' : '#BDBDBD'}
          />
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  // Hero
  hero: {
    paddingHorizontal: 16,
    paddingVertical: 32,
    backgroundColor: '#FFFFFF',
  },

  imageContainer: {
    position: 'relative',
    marginBottom: 8,
    height: 240,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderWidth: 1,
  },

  image: {
    marginBottom: 8,
    height: 240,
    borderRadius: 8,
  },

  camera: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 60,
    height: 60,
    transform: 'translate(-30px, -30px)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },

  imageAction: {
    marginLeft: 6,
    marginBottom: 32,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#BDBDBD',
  },

  imageDetail: {
    height: 50,
    width: '100%',
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
  },

  detail: {
    marginBottom: 32,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
  },

  location: {
    marginLeft: 6,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#212121',
    textDecorationLine: 'underline',
    textDecorationColor: '#212121',
  },

  mainText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#BDBDBD',
  },

  button: {
    padding: 16,
    width: '100%',
    height: 50,
    alignItems: 'center',
    borderRadius: 25,
  },

  // Footer
  trashBtn: {
    marginBottom: 35,
    width: 70,
    height: 40,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
});
