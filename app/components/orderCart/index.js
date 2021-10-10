import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import BagIcon from '../bagIcon';
import CartCard from '../cartCard';
import Radio from '../radio';
import {Link} from "react-router-native";
import MyGoBack from '../myGoBack';

const OrderCart = (props) => {
  const {ordersArr} = props;
  const [totalCost, setTotalCost] = useState(0);
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = () => {
    setSelectAll(prevSlt => !prevSlt);
  };

  const addPrice = (p) => {
    setTotalCost(prevTotal => prevTotal + p);
  };

  const minPrice = (p) => {
    setTotalCost(prevTotal => prevTotal - p);
  }

  const body = ordersArr.map((item) => {
    return (
      <CartCard name={item.name} price={item.price} addPrice={addPrice} minPrice={minPrice} />
    );
  });

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <MyGoBack />
          <Text style={{fontSize: 20, color: '#03045e'}}>Your Cart</Text>
          <BagIcon {...props} />
        </View>
        <View style={styles.body}>
          <ScrollView style={styles.cartContainer}>
            {ordersArr.length > 0 ? body : <Text style={styles.empty}>There is no item in your cart...</Text>}
          </ScrollView>
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20
          }}>
            <Radio selected={selectAll} handleSelect={handleSelectAll} />
            <Text style={styles.font}>Select all</Text>
          </View>
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            marginBottom: 20
          }}>
            <Text style={styles.font}>Total:</Text>
            <Text style={styles.font}>${totalCost}</Text>
          </View>
        </View>
        <Link 
          to={{
            pathname: "/checkout",
            state: {totalCost: totalCost}
          }}
          style={{
            alignItems: 'center'
          }}
        >
          <View style={styles.checkoutContainer}>
            <Text style={styles.checkout}>Checkout</Text>
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

const styles= StyleSheet.create({
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
  container: {
    position: 'absolute',
    backgroundColor: '#F6F8F9',
    height: '100%',
    width: '100%',
    paddingHorizontal: 20
  },
  header: {
    position: 'relative',
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  body: {
    marginTop: 40,
    display: 'flex',
    flexDirection: 'column'
  },
  cartContainer: {
    height: 500,
    paddingHorizontal: 10
  },
  font: {
    fontSize: 15,
    color: '#03045e'
  },
  empty: {
    fontSize: 20,
    color: '#03045e',
    textAlign: 'center'
  },
  checkoutContainer: {
    backgroundColor: '#03045e',
    borderRadius: 15,
    boxShadow: '1px 2px 11px -1px rgba(21,17,17,0.75)',
    width: 250,
    height: 55,
    textAlign: 'center',
    justifyContent: 'center'
  },
  checkout: {
    color: '#F6F8F9',
    fontSize: 20,
    textAlign: 'center'
  }
});

export default OrderCart;