import { View, Text, Image, TextInput, ImageBackground } from 'react-native';
import { TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { styles } from './RegistrationScreenStyles';

export const RegistrationScreen = () => {
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
        <View style={styles.userPhotoContainer}>
          <Image
            style={styles.userPhoto}
            source={require('../../img/user.jpg')}
          />
          {/* <TouchableOpacity style={styles.imageWrap} >
          <Image style={styles.image} source={require('../../img/plus-orange.png')} />
        </TouchableOpacity> */}
          <TouchableOpacity
            style={{ ...styles.imageWrap, borderColor: '#E8E8E8' }}
          >
            <Image
              style={styles.image}
              source={require('../../img/cross.png')}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.titleText}>Registration</Text>

        <TextInput
          style={[styles.input, styles.mainText]}
          placeholder="Login"
        />
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
          <Text style={{ ...styles.mainText, color: 'white' }}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ ...styles.button, backgroundColor: 'white' }}
        >
          <Text style={styles.mainText}>Have an account? Log In</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};
