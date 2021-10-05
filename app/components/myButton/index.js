import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Pressable, Button} from 'react-native';

const MyButton = (props) => {
  const {title, click, disabled} = props;

  return (
    <Pressable 
      disabled={disabled}
      onPress={click} 
      style={disabled ? styles.containerDisabled : styles.container}
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
    justifyContent: 'center',
    margin: 10
  },
  containerDisabled: {
    backgroundColor: '#ced4da',
    borderRadius: 15,
    width: 250,
    height: 55,
    textAlign: 'center',
    justifyContent: 'center',
    margin: 10
  }
});

export default MyButton;