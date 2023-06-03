import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';

import { RegistrationScreen } from './src/components/RegistrationScreen/RegistrationScreen';
import { LoginScreen } from './src/components/LoginScreen/LoginScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Medium': require('./src/fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': require('./src/fonts/Roboto-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <RegistrationScreen />
      {/* <LoginScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  // backgroundImage: {
  //   width: '100%',
  //   flex: 1,
  //   justifyContent: 'flex-end',
  // },
});
