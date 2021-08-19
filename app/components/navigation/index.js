import React from 'react';
import { View, Text} from 'react-native';

const Navigation = (props) => {

  return (
    <View
      style={{
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        width: '100%',
        position: 'fixed',
        bottom: 0,
        border: '1px solid grey',
        alignItems: 'center',
      }}
    >

      <Text>Home</Text>
      <Text>Order Cart</Text>
      <Text>My Info</Text>

    </View>
  );
};


export default Navigation;