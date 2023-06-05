import { useState } from 'react';
import { View, Text, Image, TextInput, ImageBackground } from 'react-native';
import { TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { StyleSheet, Keyboard } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import { Feather } from '@expo/vector-icons';

const backgroundImage = require('../img/background-main-1x.jpg');
const userPhoto = require('../img/user.jpg');
const initialFormValue = { login: '', email: '', password: '' };
const initialFormState = {
  isActiveLogin: false,
  isActiveEmail: false,
  isActivePass: false,
  isHiddenPass: true,
};

export const RegistrationScreen = () => {
  const [isKeyboard, setIsKeyboard] = useState(false);
  const [formValue, setFormValue] = useState(initialFormValue);
  const [formState, setFormState] = useState(initialFormState);

  const hideKeyboard = () => {
    Keyboard.dismiss();
    setIsKeyboard(false);
    console.log(formValue);
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
              borderWidth: formState.isActiveLogin ? 1 : 0,
              backgroundColor: formState.isActiveLogin ? 'white' : '#E8E8E8',
            }}
            textContentType="username"
            placeholder="Login"
            value={formValue.login}
            onFocus={() => {
              setIsKeyboard(true);
              setFormState(prevState => ({
                ...prevState,
                isActiveLogin: true,
              }));
            }}
            onBlur={() => setFormState(initialFormState)}
            onChangeText={value =>
              setFormValue(prevState => ({ ...prevState, login: value }))
            }
          />
          <TextInput
            style={{
              ...styles.input,
              ...styles.mainText,
              borderWidth: formState.isActiveEmail ? 1 : 0,
              backgroundColor: formState.isActiveEmail ? 'white' : '#E8E8E8',
            }}
            textContentType="emailAddress"
            value={formValue.email}
            inputMode="email"
            placeholder="E-mail"
            onFocus={() => {
              setIsKeyboard(true);
              setFormState(prevState => ({
                ...prevState,
                isActiveEmail: true,
              }));
            }}
            onBlur={() => setFormState(initialFormState)}
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
                borderWidth: formState.isActivePass ? 1 : 0,
                backgroundColor: formState.isActivePass ? 'white' : '#E8E8E8',
              }}
              textContentType="password"
              value={formValue.password}
              placeholder="Password"
              secureTextEntry={formState.isHiddenPass}
              onFocus={() => {
                setIsKeyboard(true);
                setFormState(prevState => ({
                  ...prevState,
                  isActivePass: true,
                }));
              }}
              onBlur={() => setFormState(initialFormState)}
              onChangeText={value =>
                setFormValue(prevState => ({ ...prevState, password: value }))
              }
            />
            <TouchableOpacity
              style={styles.passwordBtn}
              onPress={() =>
                setFormState(prevState => ({
                  ...prevState,
                  isHiddenPass: !prevState.isHiddenPass,
                }))
              }
              onBlur={() =>
                setFormState(prevState => ({
                  ...prevState,
                  isHiddenPass: true,
                }))
              }
            >
              <Text style={styles.mainText}>
                {formState.isHiddenPass ? 'Show' : 'Hide'}
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button} onPress={hideKeyboard}>
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