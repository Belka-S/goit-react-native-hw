import { View, Text, Image, TextInput } from 'react-native';
import { ImageBackground, TouchableOpacity } from 'react-native';
import { styles } from './RegistrationScreenStyles';

const backgroundImage = require('../../img/background-main-1x.jpg');
const image = require('../../img/user.jpg');

export const RegistrationScreen = () => {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.mainContainer}>
        <View style={styles.userPhotoContainer}>
          <Image style={styles.userPhoto} source={image} />
          {/* <TouchableOpacity style={styles.imageWrap} activeOpacity={0.6}>
          <Image style={styles.image} source={require('../../img/plus.png')} />
        </TouchableOpacity> */}
          <TouchableOpacity
            style={{ ...styles.imageWrap, borderColor: '#E8E8E8' }}
            activeOpacity={0.6}
          >
            <Image
              style={styles.image}
              source={require('../../img/cross.png')}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.titleText}>Registration</Text>

        <TextInput
          style={{ ...styles.input, ...styles.mainText }}
          placeholder="Login"
        />
        <TextInput
          style={{ ...styles.input, ...styles.mainText }}
          inputMode="email"
          placeholder="E-mail"
        />
        <View style={{ ...styles.passwordWrap, marginBottom: 43 }}>
          <TextInput
            style={{ ...styles.input, ...styles.mainText, marginBottom: 0 }}
            placeholder="Password"
            secureTextEntry="true"
          />
          <TouchableOpacity style={styles.passwordBtn} activeOpacity={0.6}>
            <Text style={styles.mainText}>Show</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} activeOpacity={0.6}>
          <Text style={{ ...styles.mainText, color: 'white' }}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ ...styles.button, backgroundColor: 'white' }}
          activeOpacity={0.6}
        >
          <Text style={styles.mainText}>Have an account? Log In</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
