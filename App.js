import React, {useState, useEffect, Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NativeRouter, Route, Link} from "react-router-native";
import LoginScreen from './app/components/login';
import RegisterScreen from './app/components/register';
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

  const [userKey, setUserKey] = useState('');
  const [userName, setUserName] = useState('');
  const [fruitArr, setFruitArr] = useState([]);
  const [ordersArr, setOrdersArr] = useState([]);
  const [originOrderCartObj, setOriginOrderCartObj] = useState({});
  const [addressArr, setAddressArr] = useState([]);
  const [originAddressObj, setOriginAddressObj] = useState({});
  const [wishArr, setWishArr] = useState([]);
  const [originWishObj, setOriginWishObj] = useState({});
  const [userArr, setUserArr] = useState([]);
  const [originUserObj, setOriginUserObj] = useState({});
  const [currentUserObj, setCurrentUserObj] = useState({});
  const [orderHistoryArr, setOrderHistoryArr] = useState([]);

  // set current user key from login
  const handleSetUserKey = (newKey) => {
    setUserKey(newKey);
  };

  // get user info according to the key
  useEffect(() => {
    if (userKey !== '') {

      database.ref().child('User').child(userKey).get().then((snapshot) => {
        if (snapshot.exists()) {
          // console.log('userdata', snapshot.val());
          setCurrentUserObj(snapshot.val())
        } else {
          console.log("No order data available");
        }
      }).catch((err) => {
        console.log(err);
      });

      // Name
      database.ref().child('User').child(userKey).child('Name').get().then((snapshot) => {
        if (snapshot.exists()) {
          // console.log(Object.values(snapshot.val()));
          setUserName(snapshot.val());
        } else {
          console.log("No order data available");
        }
      }).catch((err) => {
        console.log(err);
      });

      // Order cart
      database.ref().child('User').child(userKey).child('OrderCart').get().then((snapshot) => {
        if (snapshot.exists()) {
          // console.log(Object.values(snapshot.val()));
          setOriginOrderCartObj(snapshot.val());
          setOrdersArr(Object.values(snapshot.val())); 
        } else {
          console.log("No order data available");
        }
      }).catch((err) => {
        console.log(err);
      });
  
      database.ref().child('User').child(userKey).child('OrderCart').on('child_added',() => {
        database.ref().child('User').child(userKey).child('OrderCart').get().then((snapshot) => {
          if (snapshot.exists()) {
            // console.log(Object.values(snapshot.val()));
            setOriginOrderCartObj(snapshot.val());
            setOrdersArr(Object.values(snapshot.val()));   
          } else {
            console.log("No data available");
          }
        }).catch((err) => {
          console.log(err);
        });
      });

      database.ref().child('User').child(userKey).child('OrderCart').on('child_removed',() => {
        database.ref().child('User').child(userKey).child('OrderCart').get().then((snapshot) => {
          if (snapshot.exists()) {
            // console.log(Object.values(snapshot.val()));
            setOriginOrderCartObj(snapshot.val());
            setOrdersArr(Object.values(snapshot.val()));   
          } else {
            console.log("No data available");
          }
        }).catch((err) => {
          console.log(err);
        });
      });

      // Address
      database.ref().child('User').child(userKey).child('Address').get().then((snapshot) => {
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
  
      database.ref().child('User').child(userKey).child('Address').on('child_added', () => {
        database.ref().child('User').child(userKey).child('Address').get().then((snapshot) => {
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
  
      database.ref().child('User').child(userKey).child('Address').on('child_removed', () => {
        database.ref().child('User').child(userKey).child('Address').get().then((snapshot) => {
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

      // wishlist
      database.ref().child('User').child(userKey).child('WishList').get().then((snapshot) => {
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
  
      database.ref().child('User').child(userKey).child('WishList').on('child_added', () => {
        database.ref().child('User').child(userKey).child('WishList').get().then((snapshot) => {
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
  
      database.ref().child('User').child(userKey).child('WishList').on('child_removed', () => {
        database.ref().child('User').child(userKey).child('WishList').get().then((snapshot) => {
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
      // order history
      database.ref().child('User').child(userKey).child('OrderHistory').get().then((snapshot) => {
        if (snapshot.exists()) {
          // console.log('yang', Object.values(snapshot.val()));
          setOrderHistoryArr(Object.values(snapshot.val()));
        } else {
          console.log("No data1 available");
        }
      }).catch((err) => {
        console.log(err);
      });
  
      database.ref().child('User').child(userKey).child('OrderHistory').on('child_added', () => {
        database.ref().child('User').child(userKey).child('OrderHistory').get().then((snapshot) => {
          if (snapshot.exists()) {
            // console.log('yang', Object.values(snapshot.val()));
            setOrderHistoryArr(Object.values(snapshot.val()));
          } else {
            console.log("No data2 available");
          }
        }).catch((err) => {
          console.log(err);
        });
      });
    }
  }, [userKey]);

  useEffect(() => {
    // Fruit
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

    // User
    database.ref().child('User').get().then((snapshot) => {
      if (snapshot.exists()) {
        // console.log(Object.values(snapshot.val()));
        setOriginUserObj(snapshot.val());
        setUserArr(Object.values(snapshot.val()));
      } else {
        console.log("No order data available");
      }
    }).catch((err) => {
      console.log(err);
    });

    database.ref().child('User').on('child_added', () => {
      database.ref().child('User').get().then((snapshot) => {
        if (snapshot.exists()) {
          // console.log(Object.values(snapshot.val()));
          setOriginUserObj(snapshot.val());
          setUserArr(Object.values(snapshot.val()));
        } else {
          console.log("No order data available");
        }
      }).catch((err) => {
        console.log(err);
      });
    });

    database.ref().child('User').on('child_changed', () => {
      database.ref().child('User').get().then((snapshot) => {
        if (snapshot.exists()) {
          // console.log(Object.values(snapshot.val()));
          setOriginUserObj(snapshot.val());
          setUserArr(Object.values(snapshot.val()));
        } else {
          console.log("No order data available");
        }
      }).catch((err) => {
        console.log(err);
      });
    });

  },[]);

  return (
    <NativeRouter>
      <View style={styles.container}>
        <Route path="/" render={() => <LoginScreen userArr={userArr} originUserObj={originUserObj} setUserKey={handleSetUserKey} />} />
        <Route path="/register" render={() => <RegisterScreen />} />
        <Route path="/home" render={() => <Home user={userName} userKey={userKey} ordersArr={ordersArr} fruitList={fruitArr} wishList={wishArr} />} />
        <Route path="/about" render={() => <OrderCart userKey={userKey} ordersArr={ordersArr} originOrderCartObj={originOrderCartObj} />} />
        <Route path="/topics" render={() => <MyInfo ordersArr={ordersArr} userObj={currentUserObj} />} />
        <Route path="/checkout" render={() => <Checkout userKey={userKey} ordersArr={ordersArr} originOrderCartObj={originOrderCartObj} />} />
        <Route path="/Account Information" render={() => <AccountInfo userObj={currentUserObj} />} />
        <Route path="/Address" render={() => <Address userKey={userKey} addressList={addressArr} originAddressObj={originAddressObj} />} />
        <Route path="/Account & Card" render={() => <AccountCard />} />
        <Route path="/Wish list" render={() => <FavouriteList userKey={userKey} wishList={wishArr} originWishObj={originWishObj} />} />
        <Route path="/Order History" render={() => <OrderHistory orderHistoryArr={orderHistoryArr} />} />
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
