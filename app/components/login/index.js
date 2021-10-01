import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import {Link} from 'react-router-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Log in</Text>
      <Link to="/home">
        <Text>Log in</Text>
      </Link>
    </View>
  );
};

const styles= StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'yellow'
  }
});

export default LoginScreen;