import { View, Text, TextInput } from 'react-native';
import { TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from './LoginScreenStyles';

export const LoginScreen = () => {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../../img/background-main-1x.jpg')}
      resizeMode="cover"
    >
      <View style={styles.mainContainer}>
        <Text style={styles.titleText}>Log In</Text>

        <TextInput
          style={[styles.input, styles.mainText]}
          inputMode="email"
          placeholder="E-mail"
        />
        <View style={{ ...styles.passwordWrap, marginBottom: 43 }}>
          <TextInput
            style={{ ...styles.input, ...styles.mainText, marginBottom: 0 }}
            placeholder="Password"
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.passwordBtn}>
            <Text style={styles.mainText}>Show</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={{ ...styles.mainText, color: 'white' }}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ ...styles.button, backgroundColor: 'white' }}
        >
          <Text style={styles.mainText}>Don't have an account? Register</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
