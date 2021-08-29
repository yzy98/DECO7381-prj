import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import BagIcon from '../bagIcon';
import CartCard from '../cartCard';
import Radio from '../radio';

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
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Your Cart</Text>
        <BagIcon />
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
      <Button 
        style={{
          marginHorizontal: 20
        }}
        title='Checkout'
        color='#03045e'
      />
    </View>
  );
};

const styles= StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10,
    width: '100%',
    paddingHorizontal: 20
  },
  header: {
    position: 'relative',
    top: 10,
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
  }
});

export default OrderCart;