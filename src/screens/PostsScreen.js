import React, { useState } from 'react';
import { TouchableOpacity, Text, Image, Platform } from 'react-native';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { POSTS } from '../services/data';

const userPhoto = require('../img/user.jpg');

export const PostsScreen = () => {
  const [posts, setPosts] = useState(POSTS);

  return (
    // <SafeAreaView style={styles.mainContainer}>
    <ScrollView style={styles.hero}>
      <View style={styles.userContainer}>
        <Image style={styles.userPhoto} source={userPhoto} />
        <View>
          <Text style={styles.userName}>Natali Shevchenko</Text>
          <Text style={styles.userEmail}>sheva@mail.com</Text>
        </View>
      </View>
      {posts.map(el => (
        <View style={{ marginBottom: 32 }} key={el.id}>
          <Image style={styles.image} source={el.image} />
          <Text style={styles.imageTitle}>{el.title}</Text>
          <View style={styles.detailContainer}>
            <TouchableOpacity style={styles.detail}>
              <Feather name="message-circle" size={20} color="#BDBDBD" />
              <Text style={styles.comments}>{el.comments}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.detail}>
              <Feather name="map-pin" size={20} color="#BDBDBD" />
              <Text style={styles.location}>{el.location}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
  },

  // Hero
  hero: {
    paddingHorizontal: 16,
    paddingVertical: 32,
    backgroundColor: '#FFFFFF',
  },

  userContainer: {
    marginBottom: 32,
    flexDirection: 'row',
    alignItems: 'center',
  },

  userPhoto: { marginRight: 8, width: 60, height: 60, borderRadius: 16 },

  userName: {
    fontFamily: 'Roboto-Medium',
    fontSize: 13,
    color: '#212121',
  },

  userEmail: {
    fontFamily: 'Roboto-Regular',
    fontSize: 11,
  },

  image: {
    marginBottom: 8,
    height: 240,
    borderRadius: 8,
  },

  imageTitle: {
    marginBottom: 8,
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
  },

  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  detail: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  comments: {
    marginLeft: 6,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#BDBDBD',
  },

  location: {
    marginLeft: 6,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#212121',
    textDecorationLine: 'underline',
    textDecorationColor: '#212121',
  },

  // Footer
  footer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#E8E8E8',
  },

  addBtn: {
    marginLeft: 40,
    marginRight: 40,
    width: 70,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: '#FF6C00',
  },

  addImage: { width: 14, height: 14 },
});
