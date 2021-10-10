import React, {useState, useEffect} from 'react';
import { Text, View } from 'react-native';
import { FontAwesomeIcon, } from '@fortawesome/react-native-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { database } from '../../../App';
import {Link} from 'react-router-native';

const BagIcon = (props) => {
  const {ordersArr} = props;
  // const [num, setNum] = useState(0);

  // useEffect(() => {
  //   database.ref().child('OrderCart').get().then((snapshot) => {
  //     if (snapshot.exists()) {
  //       setNum(Object.keys(snapshot.val()).length);   
  //     } else {
  //       console.log("No data available");
  //     }
  //   }).catch((err) => {
  //     console.log(err);
  //   });

  //   database.ref().child('OrderCart').on('child_added',() => {
  //     database.ref().child('OrderCart').get().then((snapshot) => {
  //       if (snapshot.exists()) {
  //         // console.log(Object.keys(snapshot.val()).length);
  //         // console.log(snapshot.val());
  //         setNum(Object.keys(snapshot.val()).length);   
  //       } else {
  //         console.log("No data available");
  //       }
  //     }).catch((err) => {
  //       console.log(err);
  //     });
  //   });
  // },[]);

  return (
    <Link to='/about'>
      <View style={{
        width: 'fit-content'
      }}> 
        <FontAwesomeIcon icon={faShoppingBag} size={32} />
        <Text style={{
          backgroundColor: '#dc2f02',
          color: '#FFF',
          fontWeight: 'bold',
          width: 15,
          height: 15,
          textAlign: 'center',
          borderRadius: 7.5,
          fontSize: 13,
          position: 'absolute',
          right: -1
        }}>
          {Array.isArray(ordersArr) ? ordersArr.length : 0}
        </Text>
      </View>
    </Link>
  );
};

export default BagIcon;