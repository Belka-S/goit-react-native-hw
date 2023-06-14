import React from 'react';
import { useDispatch } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { authSignOut } from '../../redux/auth/authOperations';
import { PostsScreen } from '../nestedScreens/PostsScreen';
import { CommentsScreen } from '../nestedScreens/CommentsScreen';
import { MapScreen } from '../nestedScreens/MapScreen';

const NestedScreen = createStackNavigator();

export const Home = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <NestedScreen.Navigator initialRouteName="Posts">
      <NestedScreen.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          headerRight: props => (
            <TouchableOpacity
              style={{ marginRight: 16 }}
              onPress={() => {
                dispatch(authSignOut());
              }}
            >
              <Feather name="log-out" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
        }}
      />
      <NestedScreen.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          headerBackImage: () => (
            <Feather
              style={{ marginLeft: 16 }}
              name="arrow-left"
              size={26}
              color="#BDBDBD"
            />
          ),
          headerBackTitleVisible: false,
          tabBarStyle: { display: 'none' },
        }}
      />
      <NestedScreen.Screen
        name="Map"
        component={MapScreen}
        options={{
          headerBackImage: () => (
            <Feather
              style={{ marginLeft: 16 }}
              name="arrow-left"
              size={26}
              color="#BDBDBD"
            />
          ),
          headerBackTitleVisible: false,
        }}
      />
    </NestedScreen.Navigator>
  );
};
