import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';

import { store } from './src/redux/store';
import { Main } from './src/Main';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Medium': require('./src//assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': require('./src//assets/fonts/Roboto-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
