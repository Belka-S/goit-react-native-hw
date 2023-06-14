import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { RegistrationScreen } from '../screens/authScreens/RegistrationScreen';
import { LoginScreen } from '../screens/authScreens/LoginScreen';
import { Home } from '../screens/mainScreens/Home';
import { CreatePostsScreen } from '../screens/mainScreens/CreatePostsScreen';
import { ProfileScreen } from '../screens/mainScreens/ProfileScreen';

// import { PostsScreen } from '../screens/nestedScreens/PostsScreen';

const AuthStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

export const useRoute = isAuth => {
  if (isAuth) {
    return (
      <BottomTab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            paddingHorizontal: 55,
            paddingTop: 10,
            paddingBottom: Platform.OS === 'ios' ? 30 : 10,
            height: Platform.OS === 'ios' ? 80 : 60,
          },
          headerTitleAlign: 'center',
        }}
        backBehavior="history"
      >
        <BottomTab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Feather
                name="grid"
                size={size}
                color={focused ? '#FF6C00' : color}
              />
            ),
            headerShown: false,
            // tabBarStyle: { display: 'none' },
          }}
        />
        <BottomTab.Screen
          name="Create Post"
          component={CreatePostsScreen}
          options={{
            tabBarStyle: { display: 'none' },
            tabBarIcon: ({ focused, color, size }) => (
              <View style={styles.createPost}>
                <Feather name="plus" size={size} color={'#FFFFFF'} />
              </View>
            ),
            headerLeft: props => {
              const navigation = useNavigation();

              return (
                <TouchableOpacity
                  style={{ marginLeft: 16 }}
                  onPress={() => navigation.goBack()}
                >
                  <Feather name="arrow-left" size={24} color="#BDBDBD" />
                </TouchableOpacity>
              );
            },
          }}
        />
        <BottomTab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <Feather
                name="user"
                size={size}
                color={focused ? '#FF6C00' : color}
              />
            ),
          }}
        />
      </BottomTab.Navigator>
    );
  }

  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen
        name="Register"
        component={RegistrationScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      {/* <AuthStack.Screen
        name="Home"
        component={PostsScreen}
        // options={{ headerShown: false }}
      /> */}
    </AuthStack.Navigator>
  );
};

const styles = StyleSheet.create({
  createPost: {
    width: 70,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#FF6C00',
  },
});
