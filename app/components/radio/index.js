import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

const Radio = (props) => {
  const {selected, handleSelect} = props;

  return (
    <TouchableOpacity
      onPress={handleSelect}
    >
      <View style={styels.notSlt}>
        {selected && <View style={styels.slt} />}
      </View>
    </TouchableOpacity>
  );
};

const styels = StyleSheet.create({
  notSlt: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#dc2f02',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slt: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#dc2f02',
  }
});

export default Radio;