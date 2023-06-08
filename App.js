import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

import { useRoute } from './src/services/router';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Medium': require('./src/fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': require('./src/fonts/Roboto-Regular.ttf'),
  });

  const isAuth = {};

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer style={{ flex: 1 }}>
      <StatusBar style="auto" />
      {useRoute(isAuth)}
    </NavigationContainer>
  );
}
