import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, Pressable, ScrollView, Button} from 'react-native';
import {useLocation} from 'react-router-native';
import BagIcon from '../bagIcon';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheckCircle, faEdit, faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

const OrderHistory= () => {
  return (
    <Text>OrderHistory page</Text>
  );
};

export default OrderHistory;