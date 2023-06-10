import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { PostsScreen } from '../nestedScreens/PostsScreen';
import { CommentsScreen } from '../nestedScreens/CommentsScreen';
import { MapScreen } from '../nestedScreens/MapScreen';

const NestedScreen = createStackNavigator();

export const Home = ({ navigation }) => {
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
                console.log('qwe');
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
          headerLeft: props => (
            <TouchableOpacity
              style={{ marginLeft: 16 }}
              onPress={() => navigation.goBack()}
            >
              <Feather name="arrow-left" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
        }}
      />
      <NestedScreen.Screen
        name="Map"
        component={MapScreen}
        options={{
          headerLeft: props => (
            <TouchableOpacity
              style={{ marginLeft: 16 }}
              onPress={() => navigation.goBack()}
            >
              <Feather name="arrow-left" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
        }}
      />
    </NestedScreen.Navigator>
  );
};
