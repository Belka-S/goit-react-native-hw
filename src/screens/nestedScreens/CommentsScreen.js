import React, { useState, useEffect } from 'react';
import 'react-native-get-random-values';
// import { nanoid } from 'nanoid';
import { format } from 'date-fns';
import { useSelector } from 'react-redux';
import { TouchableOpacity, Image, Platform, TextInput } from 'react-native';
import { SafeAreaView, ScrollView, View, StyleSheet, Text } from 'react-native';
import { Keyboard, KeyboardAvoidingView } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { doc, updateDoc, arrayUnion, onSnapshot } from 'firebase/firestore';

import { db } from '../../firebase/config';

export const CommentsScreen = ({ route }) => {
  const { postId, imageUrl } = route.params;
  const { userName } = useSelector(state => state.auth);
  const [isKeyboard, setIsKeyboard] = useState(false);
  const [comment, setComment] = useState('');
  const [allComments, setAllComments] = useState([]);

  useEffect(() => {
    getCommentsFromFirestore();
  }, []);

  const hideKeyboard = () => {
    setIsKeyboard(false);
    Keyboard.dismiss();
  };

  const createComment = async () => {
    const postRef = doc(db, 'images', postId);
    const date = Date.now();
    const avatar = require('../../assets/img/avatar-2.png');

    await updateDoc(postRef, {
      comments: arrayUnion({ comment, userName, date, avatar }),
    });
  };

  const getCommentsFromFirestore = () => {
    onSnapshot(doc(db, 'images', postId), snapshot => {
      setAllComments(snapshot.data().comments);
    });
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <TouchableWithoutFeedback onPress={hideKeyboard}>
        <ScrollView style={styles.hero}>
          <Image style={styles.image} source={{ uri: imageUrl }} />
          {allComments.reverse().map(el => {
            const isOdd = allComments.indexOf(el) % 2 === 0;
            return (
              <View
                style={{
                  flexDirection: isOdd ? 'row' : 'row-reverse',
                }}
                key={el.date}
              >
                <Image source={el.avatar} />
                <View
                  style={{
                    ...styles.commentView,
                    marginLeft: isOdd ? 16 : 0,
                    borderTopLeftRadius: isOdd ? 0 : 6,
                    marginRight: !isOdd ? 16 : 0,
                    borderTopRightRadius: !isOdd ? 0 : 6,
                  }}
                >
                  <Text style={styles.commentText}>{el.comment}</Text>
                  <Text style={styles.commentDate}>
                    {format(el.date, 'dd MMMM, yyyy | hh:mm')}
                  </Text>
                </View>
              </View>
            );
          })}
          <View style={{ marginBottom: 30 }} />
        </ScrollView>
      </TouchableWithoutFeedback>

      <KeyboardAvoidingView
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.footer}>
          <View style={{ width: '100%' }}>
            <TextInput
              style={{
                ...styles.commentInput,
                backgroundColor: isKeyboard ? '#FFFFFF' : '#F6F6F6',
                borderColor: isKeyboard ? '#FF6C00' : '#E8E8E8',
              }}
              textContentType="none"
              value={comment}
              placeholder="Comment..."
              onFocus={() => {
                setIsKeyboard(true);
              }}
              onChangeText={value => setComment(value)}
              onBlur={() => hideKeyboard()}
            />
            <TouchableOpacity
              style={styles.commentBtn}
              onPress={() => {
                if (comment.length < 5) return;
                createComment();
                setComment('');
                hideKeyboard();
              }}
            >
              <Feather name="arrow-up" size={24} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
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
  },

  image: {
    marginBottom: 32,
    height: 240,
    borderRadius: 8,
  },

  avatar: {
    flex: 1,
    width: 28,
    height: 28,
    borderRadius: 14,
  },

  commentView: {
    flex: 1,
    padding: 16,
    marginBottom: 24,
    borderRadius: 6,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
  },

  commentText: {
    marginBottom: 8,
    fontFamily: 'Roboto-Regular',
    fontSize: 13,
    color: '#212121',
  },

  commentDate: {
    alignSelf: 'flex-end',
    fontFamily: 'Roboto-Regular',
    fontSize: 10,
    color: '#BDBDBD',
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
    backgroundColor: '#FFFFFF',
  },

  commentInput: {
    height: 50,
    paddingHorizontal: 16,
    borderRadius: 25,
    borderWidth: 1,
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: '#212121',
  },

  commentBtn: {
    width: 34,
    height: 34,
    position: 'absolute',
    top: 8,
    right: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 17,
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
