import React from 'react';
import {Text, View, StyleSheet, Button, Image} from "react-native";
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUserCircle, faUser, faChevronRight, faMapMarkerAlt, faCreditCard, faHeart, faSearchDollar} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-native';
import MyGoBack from '../myGoBack';
import BagIcon from '../bagIcon';

const MyInfo = (props) => {
  const {name, email} = props;

  const handleLogOut = () => {
    alert('log out');
    // call api here
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <MyGoBack />
          <Text style={{fontSize: 20, color: '#03045e'}}>Profile</Text>
          <BagIcon {...props} />
        </View>
        <View style={styles.avator}>
          <FontAwesomeIcon icon={faUserCircle} size={100} />
          <Text style={styles.fontRegular}>Navan Gomes</Text>
          <Text>navangomes&#64;gmail.com</Text>
        </View>
        <View style={styles.myAccount}>
          <AccountLi text={'Account Information'} icon={faUser} />
          <AccountLi text={'Address'} icon={faMapMarkerAlt} />
          <AccountLi text={'Wish list'} icon={faHeart} />
          <AccountLi text={'Order History'} icon={faSearchDollar} />
        </View>
        <Link 
          to={{
            pathname: "/",
          }}
          style={{
            alignItems: 'center'
          }}
        >
          <View style={styles.logoutContainer}>
            <Text style={styles.logout}>Log out</Text>
          </View>
        </Link>
      </View>
      <View style={styles.nav}>
        <Link to="/home" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text style={styles.navText}>Home</Text>
        </Link>
        <Link to="/about" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text style={styles.navText}>OrderCart</Text>
        </Link>
        <Link to="/topics" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text style={styles.navText}>MyInfo</Text>
        </Link>
      </View>
    </>
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
  nav: {
    backgroundColor: '#dc2f02',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
    width: '100%',
    position: 'fixed',
    bottom: 0,
    boxShadow: '1px 2px 11px -1px rgba(100,84,84,0.75)',
    alignItems: 'center',
  },
  navText: {
    fontWeight: 700,
    fontSize: 16,
    color: '#FFF'
  },
  fontRegular: {
    fontSize: 18,
    color: '#03045e',
  },
  container: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: '#F6F8F9'
  },
  header: {
    position: 'relative',
    marginTop: 20,
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
  logoutContainer: {
    backgroundColor: '#03045e',
    borderRadius: 15,
    boxShadow: '1px 2px 11px -1px rgba(21,17,17,0.75)',
    width: 250,
    height: 55,
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 40
  },
  logout: {
    color: '#F6F8F9',
    fontSize: 20,
    textAlign: 'center'
  }
});

export default MyInfo;
