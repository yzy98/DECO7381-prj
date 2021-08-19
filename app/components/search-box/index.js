import React, { useState } from 'react';
import {TextInput, Alert, Button} from 'react-native';

const searchIcon = require('./images/search.png');

const SearchBox = (props) => {
  const [text, setText] = useState('');

  return (
    <div
      style={{
        flexDirection: 'row',
        position: 'relative',
        textAlign: 'center'
      }}
    >
      <img
        style={{
          height: 30,
          position: 'absolute',
          right: '5%',
          top: 15,
          cursor: 'pointer'

        }}
        src={searchIcon}
      />
      <TextInput 
        style={{
          height: 60,
          width: 250,
          padding: 10,
          borderRadius: 15,
          backgroundColor: '#FFF',
          outline: 'none',
          boxShadow: '1px 2px 11px -1px rgba(100,84,84,0.75)'
        }}
        onChangeText={setText}
        value={text}
        placeholder="Find your needy product"
      />
    </div>
  );
};

export default SearchBox;