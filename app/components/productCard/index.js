import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, Pressable} from 'react-native';
import {database} from '../../../App';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';

async function addToCart(name, season, price) {
  return database.ref().child('OrderCart').push({name, season, price});
}

async function addToWishList(id, name, description, price) {
  return database.ref().child('WishList').push({id, "Name": name, "Description": description, "Price": price});
}

const appleImg = require('./images/apple.jpeg');
const banannaImg = require('./images/banana.jpeg');
const starwberryImg = require('./images/strawberry.png');
const blueberryImg = require('./images/bulueburries.png');

const ProductCard = (props) => {
  const {name, season, price, id, description, wishList} = props;
  const [InWish, setInWish] = useState(false);

  useEffect(() => {
    if (Array.isArray(wishList) && wishList.filter(i => i.id === id).length > 0) {
      setInWish(true);
    }
    console.log('yzng', wishList);
  }, [wishList]);

  const handlePress = () => {
    addToCart(name, season, price).then(() => {
      console.log('added to OrderCart');
    }).catch((err) => {
      console.log(err);
    });
  };

  const handlePressHeart = () => {
    setInWish(prev => {
      if (!prev) {
        const currentIn = !prev;
        addToWishList(id, name, description, price).then(() => {
          console.log('added to wishList');
        }).catch((err) => {
          console.log(err);
        });
        return currentIn;
      } else {
        alert('Already exists in wish list!');
        // can be replaced by myModal
        return true;
      }
    });
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.heartContainer} onPress={handlePressHeart}>
        <FontAwesomeIcon style={styles.heart} color={InWish ? '#dc2f02' : 'grey'} icon={faHeart} size={25} />
      </Pressable>
      <View style={styles.imgContainer} onResponderGrant={() => {console.log('Cliked!')}}>
        <Image style={styles.image} source={getImage(name)} />
      </View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.season}>{season ? 'In season' : 'Off season'}</Text>
      <View style={styles.bottom}>
        <Text style={styles.price}>${price}/kg</Text>
        <TouchableOpacity
          onPress={handlePress}
        >
          <Image style={styles.plus} source={require('./images/plus.png')} />
        </TouchableOpacity>
      </View>
    </View>
    
  );
};

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
  },
  heartContainer: {
    zIndex: 999
  },
  heart: {
    position: 'absolute',
    right: -5,
    top: -1
  }
});

export default ProductCard;