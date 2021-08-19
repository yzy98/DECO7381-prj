import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import ShoppingCart from '../shopping-cart';

const ShoppingCartContainer = (props) => {

  const {currentPrice, prevPrice} = props;

  return (
    <ScrollView style={styles.container}>
      <ShoppingCart name={'Apple'} currentPrice={currentPrice} formerPrice={prevPrice} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    border: '1px solid grey',
    height: 300,
    width: '100%'
  }
});

export default ShoppingCartContainer;