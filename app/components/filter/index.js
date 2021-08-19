import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Filter = () => {
  return (
    <View style={styles.container}>
      <Text style={{
        color: 'wheat',
        fontSize: 30,
        textAlign: 'center',
        margin: 'auto'
      }}>
        &#9776;
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#03045e',
    width: 55,
    height: 55,
    borderRadius: 10,
    marginLeft: 15,
    boxShadow: '1px 2px 11px -1px rgba(21,17,17,0.75)'
  }
});

export default Filter;