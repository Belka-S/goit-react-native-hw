import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, Image, TextInput, ImageBackground } from 'react-native';
import { TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { StyleSheet, Keyboard } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { authSignUp } from '../../redux/auth/authOperations';
import { fix } from '../../services/constants';

const backgroundImage = require('../../assets/img/background-main-1x.jpg');
const userPhoto = require('../../assets/img/user.jpg');
const initialFormValue = { login: '', email: '', password: '' };

export const RegistrationScreen = ({ navigation }) => {
  const [isKeyboard, setIsKeyboard] = useState(false);
  const [formValue, setFormValue] = useState(initialFormValue);
  const [isHidden, setIsHidden] = useState(true);
  const [onFocus, setOnFocus] = useState('');

  const dispatch = useDispatch();

  const hideKeyboard = () => {
    setIsKeyboard(false);
    setOnFocus('');
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <View style={{ flex: 1 }}>
        <ImageBackground
          style={{ flex: 1, justifyContent: 'flex-end' }}
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
              style={{
                ...styles.input,
                ...styles.mainText,
                borderWidth: onFocus === fix.LOGIN ? 1 : 0,
                backgroundColor: onFocus === fix.LOGIN ? '#FFFFFF' : '#E8E8E8',
              }}
              textContentType="username"
              placeholder="Login"
              value={formValue.login}
              onFocus={() => {
                setIsKeyboard(true);
                setOnFocus(fix.LOGIN);
              }}
              onBlur={() => hideKeyboard()}
              onChangeText={value =>
                setFormValue(prevState => ({ ...prevState, login: value }))
              }
            />
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
              onBlur={() => hideKeyboard()}
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
                onBlur={() => hideKeyboard()}
                onChangeText={value =>
                  setFormValue(prevState => ({ ...prevState, password: value }))
                }
              />
              <TouchableOpacity
                style={styles.passwordBtn}
                onPress={() => setIsHidden(prevState => !prevState)}
                onBlur={() => setIsHidden(true)}
              >
                <Text style={styles.mainText}>
                  {isHidden ? 'Show' : 'Hide'}
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                hideKeyboard();
                dispatch(authSignUp(formValue));
                setFormValue(initialFormValue);
              }}
            >
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                ...styles.button,
                backgroundColor: '#FFFFFF',
                marginBottom: isKeyboard ? 0 : 50,
              }}
              onPress={() => navigation.navigate('Login')}
            >
              <Text style={styles.mainText}>Have an account? Log In</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 16,
    paddingTop: 92,
    // paddingBottom: 78,
    position: 'relative',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#FFFFFF',
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
    backgroundColor: '#FFFFFF',
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
    paddingHorizontal: 16,
    width: '100%',
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

  passwordWrap: { width: '100%', position: 'relative' },

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
