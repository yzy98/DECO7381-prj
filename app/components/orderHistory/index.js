import React from 'react';
import {StyleSheet, Text, View, ScrollView, ImageBackground} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import MyGoBack from '../myGoBack';

const appleImg = require('../productCard/images/apple.jpeg');
const banannaImg = require('../productCard/images/banana.jpeg');
const starwberryImg = require('../productCard/images/strawberry.png');
const blueberryImg = require('../productCard/images/bulueburries.png');

const getImage = (name) => {
  if (name.toLowerCase().includes('apple')) {
    return appleImg;
  } else if (name.toLowerCase().includes('banana')) {
    return banannaImg;
  } else if (name.toLowerCase().includes('straw')) {
    return starwberryImg;
  } else if (name.toLowerCase().includes('blueberry')) {
    return blueberryImg;
  }
};

const OrderHistory = (props) => {
const {orderHistoryArr} = props;

  // const orderArr = [
  //   {"id": 1, "Name": "Apple", "Price": 5, "Count": 2, "Paid": 10, "Status": "Being Made", "Time": "2021/09/01"},
  //   {"id": 2, "Name": "Banana", "Price": 6, "Count": 1, "Paid": 6, "Status": "Cancelled", "Time": "2021/09/05"},
  //   {"id": 3, "Name": "Strawberry", "Price": 7, "Count": 3, "Paid": 21, "Status": "Delivered", "Time": "2021/09/09"},
  //   {"id": 4, "Name": "Blueberry", "Price": 8, "Count": 3, "Paid": 24, "Status": "Delivered", "Time": "2021/09/09"},
  //   {"id": 5, "Name": "Banana", "Price": 7, "Count": 3, "Paid": 21, "Status": "Delivered", "Time": "2021/09/09"},
  // ];

  const body = orderHistoryArr.map((item) => {
    return <OrderCard key={item.id} name={item.Name} paid={item.Paid} status={item.Status} time={item.Time} />;
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MyGoBack />
        <Text style={styles.title}>Order History</Text>
        <FontAwesomeIcon icon={faTimesCircle} size={20} style={{ visibility: 'hidden' }} />
      </View>
      <View style={styles.content}>
        <ScrollView style={styles.orderContainer}>
          {orderHistoryArr.length > 0 ? body : <Text style={styles.empty}>There is no order history for now...</Text>}
        </ScrollView>
      </View>
    </View>
  );
};

const OrderCard = (props) => {
  const {name, price, count, paid, status, time} = props;

  return (
    <View style={styles.cardContainer}>
      <View style={styles.imgContainer}>
        <ImageBackground source={getImage(name)} imageStyle={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }} style={styles.image} resizeMode="cover" blurRadius={2}>
          <Text style={{
            fontSize: 20,
            fontWeight: 700,
            color: '#FFF'
          }}>
            {name}
          </Text>
        </ImageBackground>
      </View>
      <View style={styles.bottom}>
        <View style={styles.bLeft}>
          <Text style={styles.redTitle}>STATUS</Text>
          <Text style={styles.darkText}>{status}</Text>
        </View>
        <View style={styles.bMid}>
          <Text style={styles.redTitle}>PAID</Text>
          <Text style={styles.darkText}>${paid}</Text>
        </View>
        <View style={styles.bRight}>
          <Text style={styles.redTitle}>PLACED</Text>
          <Text style={styles.darkText}>{time}</Text>
        </View>
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
  content: {
    display: 'flex',
    flexDirection: 'column'
  },
  orderContainer: {
    height: 680,
    paddingHorizontal: 10
  },
  cardContainer: {
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    boxShadow: '1px 2px 11px -1px rgba(100,84,84,0.75)',
    minHeight: 130,
    marginTop: 20
  },
  imgContainer: {
    height: 80,
  },
  bottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  bLeft: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  bMid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  bRight: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  image: {
    height: '100%',
    textAlign: 'center',
    justifyContent: 'center'
  },
  redTitle: {
    color: '#dc2f02',
    fontSize: 13,
    fontWeight: 600
  },
  darkText: {
    color: '#212529',
    fontSize: 13,
    fontWeight: 600
  }
});

export default OrderHistory;