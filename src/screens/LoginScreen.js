import { useState } from 'react';
import { View, Text, TextInput, ImageBackground } from 'react-native';
import { TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { StyleSheet, Keyboard } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';

import { fix } from '../services/constants';

const backgroundImage = require('../img/background-main-1x.jpg');
const initialFormValue = { email: '', password: '' };

export const LoginScreen = () => {
  const [isKeyboard, setIsKeyboard] = useState(false);
  const [formValue, setFormValue] = useState(initialFormValue);
  const [isHidden, setIsHidden] = useState(true);
  const [onFocus, setOnFocus] = useState('');

  const hideKeyboard = () => {
    console.log(formValue);

    Keyboard.dismiss();
    setIsKeyboard(false);
    setOnFocus('');
    setFormValue(initialFormValue);
  };

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <ImageBackground
        style={styles.backgroundImage}
        source={backgroundImage}
        resizeMode="cover"
      >
        <KeyboardAvoidingView
          style={styles.mainContainer}
          behavior={Platform.OS === 'ios' && 'padding'}
        >
          <Text style={styles.titleText}>Log In</Text>

          <TextInput
            style={{
              ...styles.input,
              ...styles.mainText,
              borderWidth: onFocus === fix.EMAIL ? 1 : 0,
              backgroundColor: onFocus === fix.EMAIL ? '#FFFFFF' : '#E8E8E8',
            }}
            textContentType="emailAddress"
            value={formValue.email}
            inputMode="email"
            placeholder="E-mail"
            onFocus={() => {
              setIsKeyboard(true);
              setOnFocus(fix.EMAIL);
            }}
            onChangeText={value =>
              setFormValue(prevState => ({ ...prevState, email: value }))
            }
          />
          <View style={{ ...styles.passwordWrap, marginBottom: 43 }}>
            <TextInput
              style={{
                ...styles.input,
                ...styles.mainText,
                marginBottom: 0,
                borderWidth: onFocus === fix.PASS ? 1 : 0,
                backgroundColor: onFocus === fix.PASS ? '#FFFFFF' : '#E8E8E8',
              }}
              textContentType="password"
              value={formValue.password}
              placeholder="Password"
              secureTextEntry={isHidden}
              onFocus={() => {
                setIsKeyboard(true);
                setOnFocus(fix.PASS);
              }}
              onChangeText={value =>
                setFormValue(prevState => ({ ...prevState, password: value }))
              }
            />
            <TouchableOpacity
              style={styles.passwordBtn}
              onPress={() => setIsHidden(prevState => !prevState)}
              onBlur={() => setIsHidden(true)}
            >
              <Text style={styles.mainText}>{isHidden ? 'Show' : 'Hide'}</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button} onPress={hideKeyboard}>
            <Text style={{ ...styles.mainText, color: '#FFFFFF' }}>Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              ...styles.button,
              backgroundColor: '#FFFFFF',
              marginBottom: isKeyboard ? 0 : 140,
            }}
          >
            <Text style={styles.mainText}>Don't have an account? Register</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  mainContainer: {
    paddingHorizontal: 16,
    paddingTop: 32,
    // paddingBottom: 78,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
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
    paddingHorizontal: 16,
    width: '100%',
    height: 50,
    borderRadius: 8,
    borderColor: '#FF6C00',
  },

  button: {
    padding: 16,
    width: '100%',
    height: 50,
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#FF6C00',
  },

  passwordWrap: {
    width: '100%',
    position: 'relative',
  },

  passwordBtn: {
    position: 'absolute',
    paddingHorizontal: 16,
    justifyContent: 'center',
    top: 0,
    right: 0,
    height: 50,
    borderRadius: 8,
    backgroundColor: 'transparent',
  },
});
