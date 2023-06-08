import React, { useState } from 'react';
import { TouchableOpacity, Image, Platform, TextInput } from 'react-native';
import { SafeAreaView, ScrollView, View, StyleSheet, Text } from 'react-native';
import { Keyboard, KeyboardAvoidingView } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { fix } from '../services/constants';

const initialFormValue = { tittle: '', location: '' };
const image = require('../img/image-sunset.jpg');

export const CreatePostsScreen = () => {
  const [{ tittle, location }, setFormValue] = useState(initialFormValue);
  const [isKeyboard, setIsKeyboard] = useState(false);
  const [onFocus, setOnFocus] = useState('');

  const hideKeyboard = () => {
    setOnFocus('');
    setIsKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <SafeAreaView style={styles.mainContainer}>
        {/* <View style={styles.header}>
          <TouchableOpacity>
            <Feather
              name="arrow-left"
              size={24}
              color="rgba(33, 33, 33, 0.8)"
            />
          </TouchableOpacity>

          <Text style={styles.titleText}>Create Publication</Text>

          <TouchableOpacity>
            <Feather name="log-out" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </View> */}

        <KeyboardAvoidingView
          style={{ flex: isKeyboard ? 0 : 1 }}
          behavior={Platform.OS === 'ios' ? 'position' : 'height'}
        >
          <View style={styles.hero}>
            <View style={styles.imageContainer}>
              {/* <Image style={styles.image} source={image} /> */}
              <View style={styles.camera}>
                <TouchableOpacity>
                  <FontAwesome name="camera" size={24} color={'#BDBDBD'} />
                </TouchableOpacity>
              </View>
            </View>

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
                textContentType="jobTitle"
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

        <View style={styles.footer}>
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
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  // Header
  header: {
    paddingTop: Platform.OS === 'ios' ? 0 : 35,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#E8E8E8',
  },

  titleText: {
    paddingVertical: 10,
    fontFamily: 'Roboto-Medium',
    fontSize: 17,
  },

  // Hero
  hero: {
    paddingHorizontal: 16,
    paddingVertical: 32,
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
  footer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  trashBtn: {
    marginLeft: 40,
    marginRight: 40,
    width: 70,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },

  // Common
  shadow: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.3,
    shadowRadius: 0.5,
  },
});
