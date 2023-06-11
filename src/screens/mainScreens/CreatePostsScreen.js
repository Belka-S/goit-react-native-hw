import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Image, Platform, TextInput } from 'react-native';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import { Keyboard, KeyboardAvoidingView } from 'react-native';
import { TouchableWithoutFeedback, ActivityIndicator } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as Location from 'expo-location';

import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { fix } from '../../services/constants';
import { translateText } from '../../services/translation';

const initialFormValue = { title: '', address: '' };

export const CreatePostsScreen = ({ navigation }) => {
  const [{ title, address }, setFormValue] = useState(initialFormValue);
  const [isKeyboard, setIsKeyboard] = useState(false);
  const [onFocus, setOnFocus] = useState('');

  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [image, setImage] = useState(null);
  const [cameraType, setCameraType] = useState(CameraType.back);

  const [locationCoords, setLocationCoords] = useState(null);

  // Keyboard
  const hideKeyboard = () => {
    setOnFocus('');
    setIsKeyboard(false);
    Keyboard.dismiss();
  };

  // Location
  useEffect(() => {
    async function request() {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      setLocationCoords({ latitude, longitude });

      const address = await Location.reverseGeocodeAsync(location.coords);
      const { city, region, country } = address[0];

      setFormValue({
        title: '',
        address: await translateText(`${city}, ${region}, ${country}`),
      });
    }
    request();
  }, []);

  // Camera
  useEffect(() => {
    async function request() {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    }
    request();
  }, []);

  const takeImage = async () => {
    const image = await cameraRef.takePictureAsync();
    setImage(image.uri);

    const { latitude, longitude } = locationCoords;

    await MediaLibrary.createAssetAsync(image.uri);
  };

  const sendImage = () => {
    navigation.navigate('Posts', { image, locationCoords, title, address });
    setFormValue(initialFormValue);
    hideKeyboard();
  };

  const toggleCameraType = () =>
    setCameraType(cameraType === 'front' ? 'back' : 'front');

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <View style={styles.mainContainer}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'position' : 'height'}
        >
          <View style={styles.hero}>
            <ImageBackground
              style={styles.cameraContainer}
              source={{ uri: image }}
            >
              <Camera
                style={{ height: image ? 0 : '100%' }}
                type={cameraType}
                ref={setCameraRef}
              >
                {!image && (
                  <View style={styles.cameraBtn}>
                    <TouchableOpacity onPress={toggleCameraType}>
                      <Ionicons name="camera-reverse-outline" size={24} />
                    </TouchableOpacity>
                  </View>
                )}
              </Camera>
            </ImageBackground>

            <Text style={styles.imageAction}>
              {hasPermission ? 'Edit image' : 'No access to camera'}
            </Text>
            <TextInput
              style={{
                ...styles.imageDetail,
                borderBottomWidth: 1,
                borderColor: onFocus === fix.TITLE ? '#FF6C00' : '#E8E8E8',
              }}
              textContentType="jobTitle"
              value={title}
              placeholder="Title..."
              onFocus={() => {
                setIsKeyboard(true);
                setOnFocus(fix.TITLE);
              }}
              onBlur={() => hideKeyboard()}
              onChangeText={value =>
                setFormValue(prevState => ({ ...prevState, title: value }))
              }
            />

            <View
              style={{
                ...styles.detail,
                borderColor: onFocus === fix.LOCATION ? '#FF6C00' : '#E8E8E8',
              }}
            >
              {locationCoords ? (
                <Feather name="map-pin" size={20} color="#BDBDBD" />
              ) : (
                <ActivityIndicator size="small" color="#FF6C00" />
              )}
              <TextInput
                style={{ ...styles.imageDetail, marginLeft: 5 }}
                textContentType="location"
                value={address}
                placeholder={
                  locationCoords
                    ? address
                    : 'Looking for location, please wait!'
                }
                placeholderTextColor={locationCoords ? '#BDBDBD' : '#FF6C00'}
                onFocus={() => {
                  setIsKeyboard(true);
                  setOnFocus(fix.LOCATION);
                }}
                onBlur={() => hideKeyboard()}
                onChangeText={value =>
                  setFormValue(prevState => ({ ...prevState, address: value }))
                }
              />
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                if (image) {
                  sendImage();
                  setImage(null);
                  return;
                }
                takeImage();
              }}
            >
              {image ? (
                <Text style={styles.buttonText}>Post</Text>
              ) : (
                <FontAwesome name="camera" size={24} color={'#FFFFFF'} />
              )}
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>

        <TouchableOpacity
          style={{
            ...styles.trashBtn,
            backgroundColor: image ? '#FF6C00' : '#F6F6F6',
          }}
          onPress={() => setImage(null)}
        >
          <Feather
            name="trash-2"
            size={20}
            color={image ? '#FFFFFF' : '#BDBDBD'}
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

  cameraContainer: {
    position: 'relative',
    marginBottom: 8,
    height: 240,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderWidth: 1,
    overflow: 'hidden',
  },

  cameraBtn: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 40,
    height: 40,
    transform: 'translate(-20px, -20px)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },

  cameraSnapBtn: {
    marginBottom: 20,
    width: 60,
    height: 60,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: '#FF6C00',
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

  address: {
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
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: '#FF6C00',
  },

  buttonText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    color: '#FFFFFF',
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
