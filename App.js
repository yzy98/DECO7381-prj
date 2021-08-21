import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import Home from './app/components/home';

import firebase from 'firebase';

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

  let fruitObj = {};

  const [fruitAr, setFruitAr] = useState([]);

  database.ref().child('userData').child('sasa22').child('ordercart').get().then((snapshot) => {
    if (snapshot.exists()) {
      // console.log(snapshot.val());
      // fruitStr = JSON.stringify(snapshot.val());
      fruitObj = snapshot.val();
      // console.log(fruitObj);
      setFruitAr(Object.keys(fruitObj).map(item => fruitObj[item]));

    } else {
      console.log("No data available");
    }
  }).catch((err) => {
    console.log(err);
  });


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

        <Route exact path="/" render={() => <Home user={'Navana'} />} />
        <Route path="/about" component={OrderCart} />
        <Route path="/topics" component={MyInfo} />

      </View>
    </NativeRouter>
  );
}

const OrderCart = () => <Text>OrderCart</Text>;

const MyInfo  = () => <Text>MyInfo page</Text>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edf6f9',
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
