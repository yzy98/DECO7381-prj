import React from 'react';
import { Text, View } from 'react-native';
import { FontAwesomeIcon, } from '@fortawesome/react-native-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const BagIcon = (props) => {
  const {num} = props;

  return (
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
        {num}
      </Text>
    </View>
  );
};

export default BagIcon;