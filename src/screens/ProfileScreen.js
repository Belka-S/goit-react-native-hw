import { useState } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import { TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

import { Feather } from '@expo/vector-icons';

const backgroundImage = require('../assets/img/background-main-1x.jpg');
const userPhoto = require('../assets/img/user.jpg');
import { POSTS } from '../services/data';

export const ProfileScreen = () => {
  const [posts, setPosts] = useState(POSTS);

  return (
    <ImageBackground source={backgroundImage} resizeMode="cover">
      <ScrollView>
        <View style={styles.hero}>
          <View style={styles.userPhotoContainer}>
            <Image style={styles.userPhoto} source={userPhoto} />
            {/* <TouchableOpacity style={styles.imageWrap}>
              <Feather name="plus" size={20} color="#FF6C00" />
            </TouchableOpacity> */}
            <TouchableOpacity
              style={{ ...styles.imageWrap, borderColor: '#E8E8E8' }}
            >
              <Feather name="x" size={20} color="#E8E8E8" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.logOut}>
            <Feather name="log-out" size={24} color="#BDBDBD" />
          </TouchableOpacity>
          <Text style={styles.titleText}>Natali Shevchenko</Text>

          {posts.map(el => (
            <View style={{ marginBottom: 32 }} key={el.id}>
              <Image style={styles.image} source={el.image} />
              <Text style={styles.imageTitle}>{el.title}</Text>
              <View style={styles.detailContainer}>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity
                    style={{ ...styles.detail, marginRight: 24 }}
                  >
                    <Feather name="message-circle" size={20} color="#FF6C00" />
                    <Text style={styles.comments}>{el.comments}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.detail}>
                    <Feather name="thumbs-up" size={20} color="#FF6C00" />
                    <Text style={styles.comments}>{el.comments}</Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.detail}>
                  <Feather name="map-pin" size={20} color="#BDBDBD" />
                  <Text style={styles.location}>{el.location}</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  // Hero
  hero: {
    marginTop: 140,
    paddingHorizontal: 16,
    paddingTop: 92,
    position: 'relative',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },

  userPhotoContainer: {
    width: 120,
    height: 120,
    position: 'absolute',
    top: 0,
    transform: 'translateY(-60px)',
    borderRadius: 16,
    backgroundColor: '#F6F6F6',
  },

  userPhoto: { width: 120, height: 120, borderRadius: 16 },

  imageWrap: {
    width: 25,
    height: 25,
    position: 'absolute',
    right: -12.5,
    bottom: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 12.5,
    borderColor: '#FF6C00',
    backgroundColor: '#FFFFFF',
  },

  logOut: {
    position: 'absolute',
    top: 22,
    right: 16,
  },

  titleText: {
    marginBottom: 32,
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
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
    color: '#212121',
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
    paddingBottom: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    backgroundColor: '#FFFFFF',
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

  // Common
  shadow: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 0.3,
    shadowRadius: 0.5,
  },
});
