import { useState } from 'react';
import { View, Text, Image, TextInput, ImageBackground } from 'react-native';
import { TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { styles } from './LoginScreenStyles';

export const LoginScreen = () => {
  const [isKeyboard, setIsKeyboard] = useState(false);

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../../img/background-main-1x.jpg')}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        style={styles.mainContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
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
