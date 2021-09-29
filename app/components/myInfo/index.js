import React from 'react';
import {Text, View, StyleSheet, Button, Image} from "react-native";
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUserCircle, faUser, faChevronRight, faMapMarkerAlt, faCreditCard, faHeart, faSearchDollar} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-native';
import MyButton from '../myButton';

const MyInfo = (props) => {
  const {name, email} = props;

  const handleLogOut = () => {
    alert('log out');
    // call api here
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.fontRegular}>Profile</Text>
      </View>
      <View style={styles.avator}>
        <FontAwesomeIcon icon={faUserCircle} size={100} />
        <Text style={styles.fontRegular}>Navan Gomes</Text>
        <Text>navangomes&#64;gmail.com</Text>
      </View>
      <View style={styles.myAccount}>
        <AccountLi text={'Account Information'} icon={faUser} />
        <AccountLi text={'Address'} icon={faMapMarkerAlt} />
        <AccountLi text={'Account & Card'} icon={faCreditCard} />
        <AccountLi text={'Favourite list'} icon={faHeart} />
        <AccountLi text={'Order History'} icon={faSearchDollar} />
      </View>
      <View style={styles.btnContainer}>
        <MyButton title={'Log out'} click={handleLogOut} />
      </View>
    </View>
  );
};

const AccountLi = (props) => {
  const {text, icon} = props;

  return (
    <Link to={{
      pathname: `/${text}`
    }}
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 25,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        width: '90%'
      }}
    >
      <View 
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          // paddingVertical: 25,
          // borderBottomColor: 'grey',
          // borderBottomWidth: 1,
          // width: '90%'
        }}
      >
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <FontAwesomeIcon icon={icon} size={20} />
          <Text style={{
            fontSize: 18,
            color: '#03045e',
            marginLeft: 10
          }}>{text}</Text>
        </View>
        <FontAwesomeIcon icon={faChevronRight} size={20} />
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  fontRegular: {
    fontSize: 18,
    color: '#03045e',
  },
  container: {
    position: 'absolute',
    top: 10,
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: '#F6F8F9'
  },
  header: {
    position: 'relative',
    top: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  avator: {
    marginTop: 40,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  myAccount: {
    marginTop: 30,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  btnContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 30
  },
});

export default MyInfo;
