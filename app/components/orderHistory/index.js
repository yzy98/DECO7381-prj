import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import MyGoBack from '../myGoBack';

const OrderHistory = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MyGoBack />
        <Text style={styles.title}>Order History</Text>
        <FontAwesomeIcon icon={faTimesCircle} size={20} style={{ visibility: 'hidden' }} />
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
});

export default OrderHistory;