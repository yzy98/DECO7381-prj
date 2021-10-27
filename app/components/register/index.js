import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Pressable, TextInput} from 'react-native';
import {useHistory} from "react-router-native";
import MyGoBack from '../myGoBack';
import MyButton from '../myButton';
import {database} from '../../../App';
import MyModal from '../myModal';

const getId = () => {
  return Math.floor(Math.random() * 1000);
};

const addUser = async (Name, AccountNo, Email, Password) => {
  const id = getId();
  return database.ref().child('User').push({id, Name, AccountNo, Email, Password});
};

const RegisterScreen = (props) => {
  const [nameValue, setNameValue] = useState('');
  const [accountValue, setAccountValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [userObj, setUserObj] = useState({});
  const [isModalShow, setModalShow] = useState(false);
  const history = useHistory();

  const handleRegister = () => {
    // alert('register!!!');
    addUser(userObj["Name"], userObj["AccountNo"], userObj["Email"], userObj["Password"]).then(() => {
      setModalShow(true);
    }).catch((err) => {
      console.log(err);
    });
  };

  useEffect(() => {
    console.log('userObj', userObj);
  }, [userObj]);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.goBack}>
          <MyGoBack />
        </View>
        <Text>Register now</Text>
        <View style={styles.inputContainer}>
          <Text>Name</Text>
          <TextInput 
            style={styles.input} 
            placeholder="name" 
            value={nameValue}
            onChangeText={setNameValue}
            onBlur={() => {
              setUserObj((prev) => {
                if (nameValue) {
                  prev["Name"] = nameValue;
                } else {
                  delete prev["Name"];
                }
                const copy = {...prev};
                return copy;
              });
            }}
          />
          <Text>Account Number</Text>
          <TextInput 
            style={styles.input} 
            placeholder="account" 
            value={accountValue}
            onChangeText={setAccountValue}
            onBlur={() => {
              setUserObj((prev) => {
                if (accountValue) {
                  prev["AccountNo"] = accountValue;
                } else {
                  delete prev["AccountNo"];
                }
                const copy = {...prev};
                return copy;
              });
            }}
          />
          <Text>Email</Text>
          <TextInput 
            style={styles.input} 
            placeholder="email" 
            value={emailValue}
            onChangeText={setEmailValue}
            onBlur={() => {
              setUserObj((prev) => {
                if (emailValue) {
                  prev["Email"] = emailValue;
                } else {
                  delete prev["Email"];
                }
                const copy = {...prev};
                return copy;
              });
            }}
          />
          <Text>Password</Text>
          <TextInput 
            style={styles.input} 
            placeholder="password" 
            value={passwordValue}
            onChangeText={setPasswordValue}
            onBlur={() => {
              setUserObj((prev) => {
                if (passwordValue) {
                  prev["Password"] = passwordValue;
                } else {
                  delete prev["Password"];
                }
                const copy = {...prev};
                return copy;
              });
            }}
          />
        </View>
        <MyButton title="Register>>" disabled={Object.keys(userObj).length < 4} click={handleRegister} />
      </View>
      {isModalShow && 
        <MyModal 
          title='Congratulations!'
          content={<Text>You have successfully registered!</Text>}
          isVisible={isModalShow} 
          setVisible={setModalShow}
          noClose={true}
          onSave={() => {
            history.goBack();
          }}
          saveText="go to login"
        />
      }
    </>
  );
};

const styles= StyleSheet.create({
  container: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6F8F9'
  },
  goBack: {
    position: 'absolute',
    top: 15,
    left: 10
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: 250
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
    padding: 10
  }
});

export default RegisterScreen;