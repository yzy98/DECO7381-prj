import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Pressable, Button} from 'react-native';

const MyButton = (props) => {
  const {title, click, size} = props;

  return (
    <Pressable 
      onPress={click} 
      style={size && size === 'small' ? styles.containerSmall : styles.container}
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

const styles= StyleSheet.create({
  title: {
    color: '#F6F8F9',
    fontSize: 20,
    textAlign: 'center'
  },
  container: {
    backgroundColor: '#03045e',
    borderRadius: 15,
    boxShadow: '1px 2px 11px -1px rgba(21,17,17,0.75)',
    width: 250,
    height: 55,
    textAlign: 'center',
    justifyContent: 'center'
  },
  containerSmall: {
    backgroundColor: '#03045e',
    borderRadius: 15,
    boxShadow: '1px 2px 11px -1px rgba(21,17,17,0.75)',
    width: 150,
    height: 55,
    textAlign: 'center',
    justifyContent: 'center'
  }
});

export default MyButton;