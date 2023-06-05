import { useState } from 'react';
import { View, Text, Image, TextInput, ImageBackground } from 'react-native';
import { TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { StyleSheet } from 'react-native';

const backgroundImage = require('../../img/background-main-1x.jpg');

export const LoginScreen = () => {
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
        <Text style={styles.titleText}>Log In</Text>

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

  passwordWrap: {
    width: '100%',
    position: 'relative',
  },

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
