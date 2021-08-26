import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const appleImg = require('../productCard/images/apple.jpeg');
const banannaImg = require('../productCard/images/banana.jpeg');
const starwberryImg = require('../productCard/images/strawberry.png');
const blueberryImg = require('../productCard/images/bulueburries.png');

const getImage = (name) => {
  if (name.includes('apple')) {
    return appleImg;
  } else if (name.includes('banana')) {
    return banannaImg;
  } else if (name.includes('straw')) {
    return starwberryImg;
  } else if (name.includes('blueberry')) {
    return blueberryImg;
  }
};

const ProductCardTwo = (props) => {
  const {name, season, price} = props;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={getImage(name)} />
      <View style={styles.right}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.season}>{season ? 'In season' : 'Off season'}</Text>
        <Text style={styles.price}>${price}/kg</Text>
      </View>
    </View>
  );
};

const styles= StyleSheet.create({
  container: {
    width: 190,
    height: 120,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginRight: 15,
    display: 'flex',
    flexDirection: 'row',
    boxShadow: '1px 2px 11px -1px rgba(100,84,84,0.75)'
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
    margin: 10
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    width: 70
  },
  name: {
    fontSize: 15,
    marginTop: 15
  },
  season: {
    fontSize: 12,
    color: 'grey',
    marginTop: 5
  },
  price: {
    fontSize: 15,
    marginTop: 5
  }
});

export default ProductCardTwo;