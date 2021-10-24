import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, Pressable, ScrollView, Button} from 'react-native';
import {useLocation} from 'react-router-native';
import BagIcon from '../bagIcon';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheckCircle, faEdit, faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import MyButton from '../myButton';
import MyGoBack from '../myGoBack';
import PayPalCheckout from 'react-paypal-checkout-button'

const PaypalBtn = (props) => {
  const {totalAmount} = props;

  return (
    <PayPalCheckout 
      clientId='AR4-nctm9jSuj4MLysnPFfKtwTYXpp__uq13O3_Kw1yaBG-h-NE_0KbYmsiSanu26HI1coxko2ZWdWID'
      amount={totalAmount}
      currency='USD'
      onSuccess={(data, order) => {
        console.log('data', data);
        console.log('order', order);
      }}
      onError={(error) => {
        console.log(error)
      }}
    />
  );
};

const visaIcon = require('./assets/visa.png');
const paypalIcon = require('./assets/paypal.png'); 
const americaExpressIcon = require('./assets/american-express.png');
const jcbIcon = require('./assets/jcb.png');
const wuIcon = require('./assets/western-union.png');
const unionPayIcon = require('./assets/unionpay.png');

// const fetch = require('node-fetch');
// const authUrl = "https://api-m.sandbox.paypal.com/v1/oauth2/token";
const clientId = "AR4-nctm9jSuj4MLysnPFfKtwTYXpp__uq13O3_Kw1yaBG-h-NE_0KbYmsiSanu26HI1coxko2ZWdWID";

const Checkout = (props) => {
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
        <MyGoBack />
        <Text style={{fontSize: 20, color: '#03045e'}}>Checkout</Text>
        <BagIcon {...props} />
      </View>
      <View style={styles.detail}>
        <Text style={{fontSize: 20, color: '#03045e'}}>Payment Details</Text>
        <Text style={styles.row}>
          <Text>Shipping Fee</Text>
          <Text>$20</Text>
        </Text>
        <Text style={styles.row}>
          <Text>Sub Total</Text>
          <Text>${totalCost}</Text>
        </Text>
        <Text style={styles.row}>
          <Text>Total</Text>
          <Text>${totalCost + 20}</Text>
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
        <Text style={{fontSize: 20, color: '#03045e'}}>Delivery Address</Text>
        <View 
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10,
            marginBottom: 30
          }}
        >
          <Text style={{fontSize: 18, color: 'grey'}}>YA California, UK</Text>
          <FontAwesomeIcon icon={faEdit} color={'grey'} size={20} />
        </View>
        <View style={styles.btnContainer}>
          {currentPay === 'paypal' ? <PaypalBtn totalAmount={totalCost + 20} /> : <Text style={styles.sorry}>Sorry, this payment method has not been supported, please try other methods...</Text>}
        </View>
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
    height: '100%',
    width: '100%',
    backgroundColor: '#F6F8F9'
  },
  header: {
    position: 'relative',
    marginTop: 20,
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
  },
  btnContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  sorry: {
    fontSize: 16,
    color: 'rgb(220, 47, 2)',
    textAlign: 'center'
  }
});

export default Checkout;