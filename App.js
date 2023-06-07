import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useFonts } from 'expo-font';

import { RegistrationScreen } from './src/screens/RegistrationScreen';
import { LoginScreen } from './src/screens/LoginScreen';
import { PostsScreen } from './src/screens/PostsScreen';
import { CreatePostsScreen } from './src/screens/CreatePostsScreen';
import { CommentsScreen } from './src/screens/CommentsScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Medium': require('./src/fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': require('./src/fonts/Roboto-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      {/* <RegistrationScreen /> */}
      {/* <LoginScreen /> */}
      {/* <PostsScreen /> */}
      {/* <CreatePostsScreen /> */}
      {/* <CommentsScreen /> */}
      <ProfileScreen />
    </View>
  );
}
