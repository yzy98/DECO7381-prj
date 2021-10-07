import React, {useState, useEffect, Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NativeRouter, Route, Link} from "react-router-native";
import LoginScreen from './app/components/login';
import Home from './app/components/home';
import OrderCart from './app/components/orderCart';
import MyInfo from './app/components/myInfo';
import Address from './app/components/address';
import AccountInfo from './app/components/accountInfo';
import AccountCard from './app/components/accountCard';
import FavouriteList from './app/components/favouriteList';
import OrderHistory from './app/components/orderHistory';

import firebase from 'firebase';
import Checkout from './app/components/checkout';

const firebaseConfig = {
  apiKey: "AIzaSyDrwmwcTXQqQ4IwtSnG2L2mTlCZKhoAb7o",
  authDomain: "order-cart-test.firebaseapp.com",
  databaseURL: "https://order-cart-test-default-rtdb.firebaseio.com",
  projectId: "order-cart-test",
  storageBucket: "order-cart-test.appspot.com",
  messagingSenderId: "718706169872",
  appId: "1:718706169872:web:ea200b0d7cabe7c36f9295"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export default function App() {

  const [fruitArr, setFruitArr] = useState([]);
  const [ordersArr, setOrdersArr] = useState([]);
  const [addressArr, setAddressArr] = useState([]);
  const [originAddressObj, setOriginAddressObj] = useState({});
  const [wishArr, setWishArr] = useState([]);
  const [originWishObj, setOriginWishObj] = useState({});

  useEffect(() => {
    database.ref().child('Fruit').get().then((snapshot) => {
      if (snapshot.exists()) {
        // console.log(snapshot.val());
        setFruitArr(snapshot.val());
  
      } else {
        console.log("No data available");
      }
    }).catch((err) => {
      console.log(err);
    });

    database.ref().child('OrderCart').get().then((snapshot) => {
      if (snapshot.exists()) {
        // console.log(Object.values(snapshot.val()));
        setOrdersArr(Object.values(snapshot.val())); 
      } else {
        console.log("No order data available");
      }
    }).catch((err) => {
      console.log(err);
    });

    database.ref().child('OrderCart').on('child_added',() => {
      database.ref().child('OrderCart').get().then((snapshot) => {
        if (snapshot.exists()) {
          // console.log(Object.values(snapshot.val()));
          setOrdersArr(Object.values(snapshot.val()));   
        } else {
          console.log("No data available");
        }
      }).catch((err) => {
        console.log(err);
      });
    });

    // Address
    database.ref().child('Address').get().then((snapshot) => {
      if (snapshot.exists()) {
        // console.log('yang', Object.values(snapshot.val()));
        setOriginAddressObj(snapshot.val());
        setAddressArr(Object.values(snapshot.val())); 
      } else {
        console.log("No data available");
      }
    }).catch((err) => {
      console.log(err);
    });

    database.ref().child('Address').on('child_added', () => {
      database.ref().child('Address').get().then((snapshot) => {
        if (snapshot.exists()) {
          // console.log('yang', Object.values(snapshot.val()));
          setOriginAddressObj(snapshot.val());
          setAddressArr(Object.values(snapshot.val())); 
        } else {
          console.log("No data available");
        }
      }).catch((err) => {
        console.log(err);
      });
    });

    database.ref().child('Address').on('child_removed', () => {
      database.ref().child('Address').get().then((snapshot) => {
        if (snapshot.exists()) {
          // console.log('yang', Object.values(snapshot.val()));
          setOriginAddressObj(snapshot.val());
          setAddressArr(Object.values(snapshot.val())); 
        } else {
          console.log("No data available");
          setOriginAddressObj({});
          setAddressArr([]);
        }
      }).catch((err) => {
        console.log(err);
      });
    });

    // WishList
    database.ref().child('WishList').get().then((snapshot) => {
      if (snapshot.exists()) {
        // console.log('yang', Object.values(snapshot.val()));
        setOriginWishObj(snapshot.val());
        setWishArr(Object.values(snapshot.val())); 
      } else {
        console.log("No data1 available");
      }
    }).catch((err) => {
      console.log(err);
    });

    database.ref().child('WishList').on('child_added', () => {
      database.ref().child('WishList').get().then((snapshot) => {
        if (snapshot.exists()) {
          // console.log('yang', Object.values(snapshot.val()));
          setOriginWishObj(snapshot.val());
          setWishArr(Object.values(snapshot.val())); 
        } else {
          console.log("No data2 available");
        }
      }).catch((err) => {
        console.log(err);
      });
    });

    database.ref().child('WishList').on('child_removed', () => {
      database.ref().child('WishList').get().then((snapshot) => {
        if (snapshot.exists()) {
        // console.log('yang', Object.values(snapshot.val()));
        setOriginWishObj(snapshot.val());
        setWishArr(Object.values(snapshot.val())); 
        } else {
          console.log("No data3 available");
          setOriginWishObj({});
          setWishArr([]);
        }
      }).catch((err) => {
        console.log(err);
      });
    });

  },[]);

  return (
    <NativeRouter>
      <View style={styles.container}>
        <Route path="/" render={() => <LoginScreen />} />
        <Route path="/home" render={() => <Home user={'Navana'} fruitList={fruitArr} wishList={wishArr} />} />
        <Route path="/about" render={() => <OrderCart ordersArr={ordersArr} />} />
        <Route path="/topics" render={() => <MyInfo />} />
        <Route path="/checkout" render={() => <Checkout />} />
        <Route path="/Account Information" render={() => <AccountInfo />} />
        <Route path="/Address" render={() => <Address addressList={addressArr} originAddressObj={originAddressObj} />} />
        <Route path="/Account & Card" render={() => <AccountCard />} />
        <Route path="/Wish list" render={() => <FavouriteList wishList={wishArr} originWishObj={originWishObj} />} />
        <Route path="/Order History" render={() => <OrderHistory />} />
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8F9',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export {
  database
};
