import React, { useState } from 'react';
import 'react-native-get-random-values';
import { nanoid } from 'nanoid';
import { compareAsc, format } from 'date-fns';
import { TouchableOpacity, Image, Platform, TextInput } from 'react-native';
import { SafeAreaView, ScrollView, View, StyleSheet, Text } from 'react-native';
import { Keyboard, KeyboardAvoidingView } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { COMMENTS } from '../services/data';

const image = require('../assets/img/image-sunset.jpg');
const initialComment = {
  id: null,
  userName: 'user-1',
  avatar: require('../assets/img/avatar-2.png'),
  text: '',
  date: null,
};

export const CommentsScreen = () => {
  const [comment, setComment] = useState(initialComment);
  const [isKeyboard, setIsKeyboard] = useState(false);

  const hideKeyboard = () => {
    setComment(initialComment);
    setIsKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Feather name="arrow-left" size={24} color="rgba(33, 33, 33, 0.8)" />
        </TouchableOpacity>
        <Text style={styles.titleText}>Comments</Text>
        <TouchableOpacity>
          <Feather name="log-out" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </View>

      <TouchableWithoutFeedback onPress={hideKeyboard}>
        <ScrollView style={styles.hero}>
          <Image style={styles.image} source={image} />
          {COMMENTS.map(el => {
            const isOdd = COMMENTS.indexOf(el) % 2 === 0;
            return (
              <View
                style={{
                  flexDirection: isOdd ? 'row' : 'row-reverse',
                }}
                key={el.id}
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
                  <Text style={styles.commentText}>{el.text}</Text>
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
        behavior={Platform.OS === 'ios' ? 'position' : 'height'}
      >
        <View style={styles.footer}>
          <View style={{ width: '100%' }}>
            <TextInput
              style={{
                ...styles.commentInput,
                backgroundColor: isKeyboard ? '#FFFFFF' : '#F6F6F6',
                borderColor: isKeyboard ? '#FF6C00' : '#E8E8E8',
              }}
              textContentType="jobTitle"
              value={comment.text}
              placeholder="Comment..."
              onFocus={() => {
                setIsKeyboard(true);
              }}
              onChangeText={value =>
                setComment(prevState => ({
                  ...prevState,
                  text: value,
                  id: nanoid(),
                  date: Date.now(),
                }))
              }
              onBlur={() => hideKeyboard()}
            />
            <TouchableOpacity
              style={styles.commentBtn}
              onPress={() => {
                if (comment.text === '') return;
                COMMENTS.push(comment);
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
  // Header
  header: {
    paddingTop: Platform.OS === 'ios' ? 0 : 35,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#E8E8E8',
  },

  titleText: {
    paddingVertical: 10,
    fontFamily: 'Roboto-Medium',
    fontSize: 17,
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
    position: 'relative',
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
