import React, {useState, useEffect, Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link, useLocation } from "react-router-native";
import Home from './app/components/home';
import OrderCart from './app/components/orderCart';
import MyInfo from './app/components/myInfo';

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

  useEffect(() => {
    database.ref().child('Fruit').get().then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
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
        console.log("No data available");
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
  },[]);

  return (
    <NativeRouter>
      <View style={styles.container}>
        <View style={styles.nav}>
          <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text style={styles.navText}>Home</Text>
          </Link>
          <Link to="/about" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text style={styles.navText}>OrderCart</Text>
          </Link>
          <Link to="/topics" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text style={styles.navText}>MyInfo</Text>
          </Link>
        </View>

        <Route exact path="/" render={() => <Home user={'Navana'} fruitList={fruitArr} />} />
        <Route path="/about" render={() => <OrderCart ordersArr={ordersArr} />} />
        <Route path="/topics" render={() => <MyInfo />} />
        <Route path="/checkout" render={() => <Checkout />} />
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
  },
  nav: {
    backgroundColor: '#FFF',
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
    fontWeight: 'bold',
    fontSize: 15
  }
});

export {
  database
};
