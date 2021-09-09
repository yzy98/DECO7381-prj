import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, Pressable, ScrollView, Button} from 'react-native';
import {useLocation} from 'react-router-native';
import BagIcon from '../bagIcon';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheckCircle, faEdit, faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

const visaIcon = require('./assets/visa.png');
const paypalIcon = require('./assets/paypal.png'); 
const americaExpressIcon = require('./assets/american-express.png');
const jcbIcon = require('./assets/jcb.png');
const wuIcon = require('./assets/western-union.png');
const unionPayIcon = require('./assets/unionpay.png');

const Checkout = () => {
  const location = useLocation();
  const {totalCost} = location.state;
  const [currentPay, setCurrentPay] = useState('visa');

  const paySelect = (name) => {
    setCurrentPay(name);
    console.log(name);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontSize: 20, color: '#03045e'}}>Checkout</Text>
        <BagIcon />
      </View>
      <View style={styles.detail}>
        <Text style={{fontSize: 20, color: '#03045e'}}>Payment Details</Text>
        <Text style={styles.row}>
          <Text>Shipping Fee</Text>
          <Text>$50</Text>
        </Text>
        <Text style={styles.row}>
          <Text>Sub Total</Text>
          <Text>${totalCost}</Text>
        </Text>
        <Text style={styles.row}>
          <Text>Total</Text>
          <Text>${totalCost + 50}</Text>
        </Text>
      </View>
      <View style={styles.method}>
        <Text style={{fontSize: 20, color: '#03045e'}}>Payment Method</Text>
        <ScrollView
          style={styles.scroll}
          horizontal='true'
        >
          <PayCard icon={visaIcon} name={'visa'} paySelect={paySelect} currentPay={currentPay} />
          <PayCard icon={paypalIcon} name={'paypal'} paySelect={paySelect} currentPay={currentPay} />
          <PayCard icon={americaExpressIcon} name={'americaExpress'} paySelect={paySelect} currentPay={currentPay} />
          <PayCard icon={wuIcon} name={'westernUnion'} paySelect={paySelect} currentPay={currentPay} />
          <PayCard icon={unionPayIcon} name={'unionPay'} paySelect={paySelect} currentPay={currentPay} />
          <PayCard icon={jcbIcon} name={'jcb'} paySelect={paySelect} currentPay={currentPay} />
        </ScrollView>
        <View 
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 15
          }}
        >
          <FontAwesomeIcon icon={faPlusSquare} color={'#03045e'} size={90} />
          <Text
            style={{
              fontSize: 18,
              color: '#03045e',
              marginLeft: 15
            }}
          >
            Add a new card
          </Text>
        </View>
        <Text style={{fontSize: 20, color: '#03045e'}}>Valid Coupons</Text>
        <View style={{height: 80}} />
        <Text style={{fontSize: 20, color: '#03045e'}}>Delivery Address</Text>
        <View 
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10,
            marginBottom: 50
          }}
        >
          <Text style={{fontSize: 18, color: 'grey'}}>YA California, UK</Text>
          <FontAwesomeIcon icon={faEdit} color={'grey'} size={20} />
        </View>
        <Button title={'Confrim'} color={'#03045e'} />
      </View>
    </View>
  );
};

const PayCard = (props) => {
  const {icon, name, paySelect, currentPay} = props;
  const [select, setSelect] = useState(currentPay == name);

  useEffect(() => {
    currentPay == name ? setSelect(true) : setSelect(false);
  }, [currentPay]);

  const handlePress = () => {
    setSelect(prev => !prev);
    if (!select) {
      paySelect(name);
    }
  };

  return(
    <Pressable onPress={handlePress}>
      <View style={select ? styles.payCardPress : styles.payCard}>
        <Image style={styles.image} source={icon} />
      </View>
      <FontAwesomeIcon icon={faCheckCircle} color={'#dc2f02'} size={15} style={select ? styles.tick : {display: 'none'}} />
    </Pressable>
  );
}

const styles= StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10,
    width: '100%'
  },
  header: {
    position: 'relative',
    top: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  detail: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginTop: 30,
    backgroundColor: '#ced4da',
    borderRadius: 30
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    fontSize: 16,
    color: '#03045e'
  },
  method: {
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 15
  },
  payCard: {
    width: 70,
    height: 70,
    backgroundColor: '#ced4da',
    borderRadius: 10,
    marginRight: 20
  },
  payCardPress: {
    width: 70,
    height: 70,
    backgroundColor: '#FFF',
    borderRadius: 10,
    boxShadow: '1px 2px 11px -1px rgba(100,84,84,0.75)',
    marginRight: 20
  },
  image: {
    width: 50,
    height: 50,
    margin: 10,
    borderRadius: 10
  },
  tick: {
    position: 'absolute',
    right: 15,
    top: -5
  },
  scroll: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 10
  }
});

export default Checkout;