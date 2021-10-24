import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import QuantityBtn from '../quantityBtn';
import Radio from '../radio';

const appleImg = require('../productCard/images/apple.jpeg');
const banannaImg = require('../productCard/images/banana.jpeg');
const starwberryImg = require('../productCard/images/strawberry.png');
const blueberryImg = require('../productCard/images/bulueburries.png');

const CartCard = (props) => {
  const {id, name, price, addPrice, minPrice} = props;
  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    setSelected(prevSlt => !prevSlt);
    !selected ? addPrice(id, name, price): minPrice(id, name, price);
  };

  return (
    <View style={selected ? styles.slt : styles.notSlt}>
      <View style={styles.left}>
        <Image style={styles.image} source={getImage(name)} />
        <View style={styles.body}>
          <Text style={styles.font}>{name}</Text>
          <View style={styles.bodyBottom}>
            <Text style={styles.font}>${price}</Text>
            <QuantityBtn />
          </View>
        </View>
      </View>
      <Radio selected={selected} handleSelect={handleSelect} />
    </View>
  );
};

const styles = StyleSheet.create({
  slt: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    boxShadow: '1px 2px 11px -1px rgba(100,84,84,0.75)',
    minHeight: 80,
    marginTop: 10,
    padding: 10
  },
  notSlt: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#ced4da',
    borderRadius: 10,
    minHeight: 80,
    marginTop: 10,
    padding: 10
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    width: 100,
    marginLeft: 15
  },
  bodyBottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5
  },
  left: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  font: {
    fontSize: 14,
    color: '#03045e'
  }
});

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

export default CartCard;