import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import MyGoBack from '../myGoBack';
import MyButton from '../myButton';

const AccountInfo = () => {
  // mock
  const userInfo = {
    'id': 0,
    'name': 'Mike James',
    'password': 'newpassword',
    'email': 'ttt@www.com'
  };

  const {id, name, password, email} = userInfo;
  const [currentName, setCurrentName] = useState(name);
  const [currentEmail, setCurrentEmail] = useState(email);
  const [currentPwd, setCurrentPwd] = useState(password);


  const handleBtnClick = () => {
    alert('edit');
    // call api to save
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MyGoBack />
        <Text style={styles.title}>Account Information</Text>
        <FontAwesomeIcon icon={faTimesCircle} size={20} style={{ visibility: 'hidden' }} />
      </View>
      <Text style={styles.span}>Name</Text>
      <TextInput style={styles.input} value={currentName} onChangeText={setCurrentName} />
      <Text style={styles.span}>Email</Text>
      <TextInput style={styles.input} value={currentEmail} onChangeText={setCurrentEmail} />
      <Text style={styles.span}>Password</Text>
      <TextInput style={styles.input} value={currentPwd} onChangeText={setCurrentPwd} />
      <View style={styles.btnContainer}>
        <MyButton title={'Save'} click={handleBtnClick} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: '#F6F8F9'
  },
  header: {
    marginVertical: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 20, 
    color: '#03045e',
    textAlign: 'center'
  },
  btnContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 30
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  span: {
    fontSize: 16, 
    color: '#03045e',
    marginLeft: 12
  }
});

export default AccountInfo;