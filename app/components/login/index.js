import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Link} from 'react-router-native';

const LoginScreen = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      <Text>Log in</Text>
      <View style={styles.loginContainer}>
        <TextInput 
          style={styles.input} 
          value={name} 
          onChangeText={setName} 
          placeholder="Account"
        />
        <TextInput 
          style={styles.input} 
          value={password} 
          onChangeText={setPassword} 
          placeholder="Password"
        />
        <Link to="/home" style={{width: 'fit-content'}}>
          <Text>Log in</Text>
        </Link>
      </View>
    </View>
  );
};

const styles= StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6F8F9'
  },
  loginContainer: {

  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default LoginScreen;