import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Pressable, Button} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMapMarkerAlt, faHome, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import MyButton from '../myButton';
import MyModal from '../myModal';

const Address = () => {
  const [isModalShow, setModalShow] = useState(false);

  const handleBtnClick = () => {
    setModalShow(true);
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Address List</Text>
        <AddressCard
          name={'Navan Gomes'} 
          phone={'0422343434'} 
          location={'60 Tribune Street, South brisbane, QLD, 4105'}
          isDeafult={true}
        />
        <AddressCard
          name={'Lebron James'} 
          phone={'0432185512'} 
          location={'319 Vu;ture St, South Brisbane, QLD, 4101'}
          isDeafult={false}
        />
        <AddressCard
          name={'Ellis B J'} 
          phone={'0732362438'} 
          location={'293 North Qy, Brisbane, QLD, 4000'}
          isDeafult={false}
        />
        <View style={styles.btnContainer}>
          <MyButton title={'Add address'} click={handleBtnClick} />
        </View>
      </View>
      {isModalShow && 
      <MyModal 
        title={'Add a new address'}
        content={<AddressInput />}
        isVisible={isModalShow} 
        setVisible={setModalShow} 
      />
      }
    </>
  );
};

const AddressInput = (props) => {
  return (
    <View>
      <Text>Name: </Text>
      <TextInput style={styles.input} />
      <Text>Mobile Phone: </Text>
      <TextInput style={styles.input} />
      <Text>Address: </Text>
      <TextInput style={styles.input} />
    </View>
  );
};

const AddressCard = (props) => {
  const {name, phone, location, isDeafult} = props;
  const [isDelete, setDelete] = useState(false);

  const handleDelete = () => {
    setDelete(true);
    // call api here
  };

  return (
    !isDelete &&
    <View style={styles.cardContainer}>
      <FontAwesomeIcon icon={isDeafult ? faHome : faMapMarkerAlt} size={30} />
      <View style={styles.column}>
        {isDeafult && <Text style={styles.default}>DEFAULT</Text>}
        <Text>{name}</Text>
        <Text>{phone}</Text>
        <Text>{location}</Text>
      </View>
      <Pressable
        style={styles.delete}
        onPress={handleDelete}
      >
        <FontAwesomeIcon icon={faTimesCircle} size={30} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 30,
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: '#F6F8F9'
  },
  title: {
    fontSize: 20, 
    color: '#03045e',
    textAlign: 'center',
    marginBottom: 20
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#ced4da',
    borderRadius: 10,
    minHeight: 80,
    marginTop: 10,
    padding: 10
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: 280,
    marginLeft: 10
  },
  default: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    borderWidth: 1,
    borderColor: 'black'
  },
  btnContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 30
  },
  delete: {
    position: 'absolute',
    top: 5,
    right: 5
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10
  }
});

export default Address;