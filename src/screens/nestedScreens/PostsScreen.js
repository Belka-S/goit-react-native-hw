import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import { StyleSheet, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';

import { auth, db } from '../../firebase/config';

const userPhoto = require('../../assets/img/user.jpg');

export const PostsScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

  const getDataFromFirestore = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'images'));
      const firebasePosts = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));
      // const firebasePosts = onSnapshot(collection(db, 'images'), snapshot => { setPosts(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));});
      setPosts(firebasePosts);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getDataFromFirestore();
  }, [posts]);

  const { email } = auth.currentUser;
  const { userName } = useSelector(state => state.auth);

  return (
    <View style={styles.hero}>
      <View style={styles.userContainer}>
        <Image style={styles.userPhoto} source={userPhoto} />
        <View>
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.userEmail}>{email}</Text>
        </View>
      </View>

      <FlatList
        data={posts.reverse()}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 32, paddingHorizontal: 16 }}>
            <Image style={styles.image} source={{ uri: item.imageUrl }} />
            <Text style={styles.imageTitle}>{item.title}</Text>

            <View style={styles.detailContainer}>
              <TouchableOpacity
                style={styles.detail}
                onPress={() =>
                  navigation.navigate('Comments', {
                    postId: item.id,
                    imageUrl: item.imageUrl,
                  })
                }
              >
                <Feather name="message-circle" size={20} color="#BDBDBD" />
                <Text style={styles.comments}>{item.comments.length}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.detail}
                onPress={() => navigation.navigate('Map', { item })}
              >
                <Feather name="map-pin" size={20} color="#BDBDBD" />
                <Text style={styles.location}>{item.address}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  // Hero
  hero: {
    paddingTop: 16,
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  userContainer: {
    marginBottom: 16,
    paddingHorizontal: 16,
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
});
