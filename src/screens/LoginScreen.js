import { useState } from 'react';
import { View, Text, TextInput, ImageBackground } from 'react-native';
import { TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { StyleSheet, Keyboard } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';

const backgroundImage = require('../img/background-main-1x.jpg');
const initialState = { email: '', password: '' };
const initialFormState = {
  isActiveEmail: false,
  isActivePass: false,
  isHiddenPass: true,
};

export const LoginScreen = () => {
  const [isKeyboard, setIsKeyboard] = useState(false);
  const [formValue, setFormValue] = useState(initialState);
  const [formState, setFormState] = useState(initialFormState);

  const hideKeyboard = () => {
    Keyboard.dismiss();
    setIsKeyboard(false);
    console.log(formValue);
    setFormValue(initialState);
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
            <Text style={{ ...styles.mainText, color: 'white' }}>Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              ...styles.button,
              backgroundColor: 'white',
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
    backgroundColor: 'white',
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
