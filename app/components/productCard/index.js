import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const appleImg = require('./images/apple.jpeg');
const banannaImg = require('./images/banana.jpeg');
const starwberryImg = require('./images/strawberry.png');
const blueberryImg = require('./images/bulueburries.png');

const ProductCard = (props) => {
  const {name, season, price} = props;

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer} onResponderGrant={() => {console.log('Cliked!')}}>
        <Image style={styles.image} source={getImage(name)} />
      </View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.season}>{season ? 'In season' : 'Off season'}</Text>
      <View style={styles.bottom}>
        <Text style={styles.price}>${price}/kg</Text>
        <Image style={styles.plus} source={require('./images/plus.png')} />
      </View>
    </View>
    
  );
};

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

const styles = StyleSheet.create({
  container: {
    width: 150,
    marginRight: 30,
    display: 'flex',
    flexDirection: 'column'
  },
  imgContainer: {
    width: 150,
    height: 150,
    backgroundColor: '#ced4da',
    borderRadius: 10,
    boxShadow: '1px 2px 11px -1px rgba(100,84,84,0.75)'
  },
  image: {
    width: 120,
    height: 120,
    margin: 15,
    borderRadius: 10
  },
  name: {
    fontSize: 18,
    marginTop: 10
  },
  season: {
    fontSize: 13,
    color: 'grey',
    marginTop: 8
  },
  price: {
    fontSize: 18
  },
  bottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 8
  },
  plus: {
    width: 30,
    height: 30
  }
});

export default ProductCard;