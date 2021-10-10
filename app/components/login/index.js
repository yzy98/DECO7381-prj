import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Link} from 'react-router-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheckCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons';

/**
 * Check if given user exists in the database
 * if exists, return the user's corresponding key
 * if account wrong, return -1
 * if account true but password wrong, return -2
 * @param {*} obj 
 */
const getUserKey = (obj, usersObj) => {
  const usersArr = Object.values(usersObj);
  // Check accountNO
  const accountArr = usersArr.filter(item => item.AccountNo === obj.account);

  // account number wrong
  if (accountArr.length === 0) {
    console.log('account number wrong!');
    return -1;
  } else {
    // account number true
    // check pwd
    if (accountArr[0].Password !== obj.password) {
      // password wrong
      console.log('password wrong!');
      return -2;
    } else {
      console.log('user exists!');
      return getKeyByValue(usersObj, accountArr[0]);
    }
  }
};

const getKeyByValue = (obj, value) => {
  return Object.keys(obj).find(key => obj[key].id === value.id);
};

const LoginScreen = (props) => {
  const {userArr, originUserObj, setUserKey} = props;
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [userObj, setUserObj] = useState({});
  const [toLink, setLink] = useState('/');
  const [accountTrue, setAccountTrue] = useState(false);
  const [pwdTrue, setPwdTrue] = useState(false);

  useEffect(() => {
    console.log('userObj1', userObj);
    if (Object.keys(userObj).length === 2) {
      // call api to check if the accoutNo and pwd is true
      // if true, Link to home
      // if not true, give alert and link to login
      console.log('userObj2', userObj);
      const userKey = getUserKey(userObj, originUserObj);
      if (userKey === -1) {     //account wrong
        setAccount('');
        setPassword('');
        setAccountTrue(false);
        setPwdTrue(false);
        setUserObj({});
        setLink('/');
      } else if (userKey === -2) {  //account true but password wrong
        setAccountTrue(true);
        setPwdTrue(false);
        setPassword('');
        setUserObj((prev) => {
          const restObj = {};
          restObj["account"] = prev.account;
          return restObj;
        });
        setLink('/');
      } else {
        setAccountTrue(true);
        setPwdTrue(true);
        setUserKey(userKey);
        setLink('/home');
        setUserObj({});
      }
    }
  }, [userObj]);

  return (
    <View style={styles.container}>
      <Text>Log in</Text>
      <View style={styles.loginContainer}>
        <View style={styles.row}>
          <TextInput 
            style={styles.input} 
            value={account} 
            onChangeText={setAccount} 
            placeholder="Account Number"
            onBlur={() => {
              setUserObj((prev) => {
                prev["account"] = account;
                const copy = {...prev};
                return copy;
              });
            }}
          />
          {accountTrue ? <FontAwesomeIcon icon={faCheckCircle} color={'green'} size={20} /> : <FontAwesomeIcon icon={faTimesCircle} color={'red'} size={20} />}
        </View>
        <View style={styles.row}>
          <TextInput 
            style={styles.input} 
            value={password} 
            onChangeText={setPassword} 
            placeholder="Password"
            onBlur={() => {
              setUserObj((prev) => {
                prev["password"] = password;
                const copy = {...prev};
                return copy;
              });
            }}
          />
          {pwdTrue ? <FontAwesomeIcon icon={faCheckCircle} color={'green'} size={20} /> : <FontAwesomeIcon icon={faTimesCircle} color={'red'} size={20} />}
        </View>
        <Link to={toLink} style={{width: 'fit-content'}}>
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
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});

export default LoginScreen;