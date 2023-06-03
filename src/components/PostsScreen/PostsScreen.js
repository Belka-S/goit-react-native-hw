import React, { useState } from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { SafeAreaView, ScrollView, View } from 'react-native';

import { styles } from './PostsScreenStyles';
import { POSTS } from './data';

export const PostsScreen = () => {
  const [posts, setPosts] = useState(POSTS);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={[styles.header, styles.shadow]}>
        <TouchableOpacity>
          <Image
            style={styles.logImage}
            source={require('../../img/arrow-left.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.titleBtn}>
          <Text style={styles.titleText}>Publications</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.logImage}
            source={require('../../img/log-out.png')}
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.hero}>
        <View style={styles.userContainer}>
          <Image
            style={styles.userPhoto}
            source={require('../../img/user.jpg')}
          />
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
                <Image
                  style={styles.logImage}
                  source={require('../../img/comments.png')}
                />
                <Text style={styles.comments}>{el.comments}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.detail}>
                <Image
                  style={styles.logImage}
                  source={require('../../img/map.png')}
                />
                <Text style={styles.location}>{el.location}</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={[styles.footer, styles.shadow]}>
        <TouchableOpacity>
          <Image
            style={styles.logImage}
            source={require('../../img/log-grid.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.addBtn}>
          <Image
            style={styles.addImage}
            source={require('../../img/plus-white.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={styles.logImage}
            source={require('../../img/log-user.png')}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
