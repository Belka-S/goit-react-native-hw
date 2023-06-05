import { useState } from 'react';
import { View, Text, Image, TextInput, ImageBackground } from 'react-native';
import { TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const backgroundImage = require('../../img/background-main-1x.jpg');
const userPhoto = require('../../img/user.jpg');

export const RegistrationScreen = () => {
  const [isKeyboard, setIsKeyboard] = useState(false);

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={backgroundImage}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        style={styles.mainContainer}
        behavior={Platform.OS === 'ios' && 'padding'}
      >
        <View style={styles.userPhotoContainer}>
          <Image style={styles.userPhoto} source={userPhoto} />
          <TouchableOpacity style={styles.imageWrap}>
            <Feather name="plus" size={20} color="#FF6C00" />
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={{ ...styles.imageWrap, borderColor: '#E8E8E8' }}
          >
            <Feather name="x" size={20} color="#E8E8E8" />
          </TouchableOpacity> */}
        </View>

        <Text style={styles.titleText}>Registration</Text>

        <TextInput
          style={[styles.input, styles.mainText]}
          placeholder="Login"
          onFocus={() => setIsKeyboard(true)}
          onBlur={() => setIsKeyboard(false)}
        />
        <TextInput
          style={[styles.input, styles.mainText]}
          inputMode="email"
          placeholder="E-mail"
          onFocus={() => setIsKeyboard(true)}
          onBlur={() => setIsKeyboard(false)}
        />
        <View style={{ ...styles.passwordWrap, marginBottom: 43 }}>
          <TextInput
            style={{ ...styles.input, ...styles.mainText, marginBottom: 0 }}
            placeholder="Password"
            secureTextEntry={true}
            onFocus={() => setIsKeyboard(true)}
            onBlur={() => setIsKeyboard(false)}
          />
          <TouchableOpacity style={styles.passwordBtn}>
            <Text style={styles.mainText}>Show</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={{ ...styles.mainText, color: 'white' }}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.button,
            backgroundColor: 'white',
            marginBottom: isKeyboard ? 0 : 50,
          }}
        >
          <Text style={styles.mainText}>Have an account? Log In</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  mainContainer: {
    paddingHorizontal: 16,
    paddingTop: 92,
    // paddingBottom: 78,
    position: 'relative',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: 'white',
    alignItems: 'center',
  },

  userPhotoContainer: {
    width: 120,
    height: 120,
    position: 'absolute',
    top: 0,
    transform: 'translateY(-60px)',
    borderRadius: 16,
    backgroundColor: '#F6F6F6',
  },

  userPhoto: { width: 120, height: 120, borderRadius: 16 },

  imageWrap: {
    width: 25,
    height: 25,
    position: 'absolute',
    right: -12.5,
    bottom: 14,

    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 12.5,
    borderColor: '#FF6C00',
    backgroundColor: 'white',
  },

  titleText: {
    marginBottom: 32,
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
  },

  mainText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#1B4371',
  },

  input: {
    marginBottom: 16,
    padding: 16,
    width: '100%',
    height: 50,
    borderRadius: 8,
    backgroundColor: '#E8E8E8',
  },

  button: {
    padding: 16,
    width: '100%',
    height: 50,
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#FF6C00',
  },

  passwordWrap: { width: '100%', position: 'relative' },

  passwordBtn: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 16,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#E8E8E8',
  },
});
