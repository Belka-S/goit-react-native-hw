import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

import { store } from './src/redux/store';
import { useRoute } from './src/services/router';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Medium': require('./src//assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': require('./src//assets/fonts/Roboto-Regular.ttf'),
  });

  const isAuth = {};
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer style={{ flex: 1 }}>
        <StatusBar style="auto" />
        {useRoute(isAuth)}
      </NavigationContainer>
    </Provider>
  );
}
