import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, Image, ImageBackground } from 'react-native';
import { TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { collection, query, where, onSnapshot } from 'firebase/firestore';

import { Feather } from '@expo/vector-icons';
import { authSignOut } from '../../redux/auth/authOperations';
import { auth, db } from '../../firebase/config';

const backgroundImage = require('../../assets/img/background-main-1x.jpg');
const userPhoto = require('../../assets/img/user.jpg');
import { POSTS } from '../../services/data';

export const ProfileScreen = ({ navigation }) => {
  const [userPosts, setUserPosts] = useState([]);
  const dispatch = useDispatch();
  const { userId } = useSelector(state => state.auth);
  const { displayName } = auth.currentUser;

  useEffect(() => {
    getUserPosts();
    console.log(userPosts);
  }, []);

  const getUserPosts = () => {
    onSnapshot(
      query(collection(db, 'images'), where('userId', '==', userId)),
      snapshot => {
        setUserPosts(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      }
    );
  };

  return (
    <ImageBackground
      source={backgroundImage}
      resizeMode="cover"
      style={styles.background}
    >
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
          <TouchableOpacity
            style={styles.logOut}
            onPress={() => {
              dispatch(authSignOut());
            }}
          >
            <Feather name="log-out" size={24} color="#BDBDBD" />
          </TouchableOpacity>
          <Text style={styles.titleText}>{displayName}</Text>

          {userPosts
            .sort((a, b) => b.uploadDate - a.uploadDate)
            .map(el => (
              <View style={{ marginBottom: 32, width: '100%' }} key={el.id}>
                <Image style={styles.image} source={{ uri: el.imageUrl }} />
                <Text style={styles.imageTitle}>{el.title}</Text>
                <View style={styles.detailContainer}>
                  <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                      style={{ ...styles.detail, marginRight: 12 }}
                      onPress={() =>
                        navigation.navigate('Comments', {
                          postId: el.id,
                          imageUrl: el.imageUrl,
                        })
                      }
                    >
                      <Feather
                        name="message-circle"
                        size={20}
                        color="#FF6C00"
                      />
                      <Text style={styles.comments}>{el.comments.length}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.detail}>
                      <Feather name="thumbs-up" size={20} color="#FF6C00" />
                      <Text style={styles.comments}>
                        {el.likes ? el.likes.length : 0}
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <TouchableOpacity
                    style={styles.detail}
                    onPress={() => navigation.navigate('Map', { item: el })}
                  >
                    <Feather name="map-pin" size={20} color="#BDBDBD" />
                    <Text style={styles.location}>{el.address}</Text>
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
  background: { flex: 1, alignItems: 'flex-end', flexDirection: 'row' },
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

  logOut: { position: 'absolute', top: 22, right: 16 },

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
});
