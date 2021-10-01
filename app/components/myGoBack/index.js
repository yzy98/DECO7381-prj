import React from 'react';
import {Pressable} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {useHistory} from 'react-router-native';

const MyGoBack = () => {
  const history = useHistory();

  return (
    <Pressable
      onPress={() => {
        history.goBack();
      }}
    >
      <FontAwesomeIcon icon={faChevronLeft} size={30} />
    </Pressable>
  );
};

export default MyGoBack;