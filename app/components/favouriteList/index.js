import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import MyGoBack from '../myGoBack';
import Radio from '../radio';
import MyButton from '../myButton';
import {database} from '../../../App';

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

const deleteWishList = async (originObj, objArr) => {
  objArr.forEach(element => {
    const childKey = getKeyByValue(originObj, element);
    return database.ref().child('WishList').child(childKey).remove();
  });
};

const getKeyByValue = (obj, value) => {
  return Object.keys(obj).find(key => obj[key].id === value.id);
};

const FavouriteList= (props) => {
  // const wishList = [
  //   {"id": 1, "Name": "Apple", "Description": "Decilious Friut", "Price": 5},
  //   {"id": 2, "Name": "Banana", "Description": "Decilious banana", "Price": 7},
  //   {"id": 3, "Name": "strawberry", "Description": "Decilious strawberry", "Price": 6},
  // ];
  const {wishList, originWishObj} = props;
  const [currentArr, setCurrentArr] = useState([]);

  // useEffect(() => {
  //   console.log('originWishObj', originWishObj);
  // }, [originWishObj]);

  const handleDelete = () => {
    deleteWishList(originWishObj, currentArr).then(() => {
      // reset current manipulate array to []
      setCurrentArr([]);
    }).catch((err) => {
      console.log(err);
    });
  };

  const handleAddToCart = () => {
    // call api with currentArr
    // currently same as delete
    deleteWishList(originWishObj, currentArr).then(() => {
      // reset current manipulate array to []
      setCurrentArr([]);
    }).catch((err) => {
      console.log(err);
    });
  };

  const addArr = (obj) => {
    setCurrentArr(prev => {
      const newArr = prev.concat(obj);
      return newArr;
    })
  };

  const removeArr = (obj) => {
    if (currentArr.length > 0) {
      setCurrentArr(prev => {
        const newArr = prev.filter(item => item.id !== obj.id);
        return newArr;
      });
    }
  };


  const body = wishList.map((item) => {
    return (
      <ListCard key={item.id} id={item.id} name={item.Name} price={item.Price} description={item.Description} addArr={addArr} removeArr={removeArr} />
    );
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MyGoBack />
        <Text style={styles.title}>Wish List</Text>
        <FontAwesomeIcon icon={faTimesCircle} size={20} style={{ visibility: 'hidden' }} />
      </View>
      <View style={styles.content}>
        <ScrollView style={styles.cartContainer}>
          {wishList.length > 0 ? body : <Text style={styles.empty}>There is no item in your wish list...</Text>}
        </ScrollView>
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20
        }}>
          <Radio selected={false} />
          <Text>Select all</Text>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <MyButton title="Delete" click={handleDelete} disabled={currentArr.length == 0} />
        <MyButton title="Add to cart" click={handleAddToCart} disabled={currentArr.length == 0} />
      </View>
    </View>
  );
};

const ListCard = (props) => {
  const {id, name, price, description, addArr, removeArr} = props;
  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    setSelected(prevSlt => !prevSlt);
  };

  useEffect(() => {
    if(selected) {
      //console.log('selected: ', selected);
      addArr({id, name, price, description});
    } else {
      //console.log('selected: ', selected);
      removeArr({id, name, price, description});
    }
  }, [selected]);

  return (
    <View style={selected ? styles.slt : styles.notSlt}>
      <View style={styles.left}>
        <Image style={styles.image} source={getImage(name)} />
        <View style={styles.body}>
          <View style={styles.row}>
            <Text style={styles.font}>{name}</Text>
            <Text style={styles.font}>${price}</Text>
          </View>
          <Text>{description}</Text>
        </View>
      </View>
      <Radio selected={selected} handleSelect={handleSelect} />
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
  cartContainer: {
    height: 500,
    paddingHorizontal: 10
  },
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
    marginLeft: 15
  },
  left: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  font: {
    fontSize: 14,
    color: '#03045e'
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20
  },
  empty: {
    fontSize: 20,
    color: '#03045e',
    textAlign: 'center'
  }
});

export default FavouriteList;