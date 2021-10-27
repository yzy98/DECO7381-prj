import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TextInput, Pressable, Switch} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMapMarkerAlt, faHome, faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import MyButton from '../myButton';
import MyModal from '../myModal';
import MyGoBack from '../myGoBack';
import {database} from '../../../App';

const getId = () => {
  return Math.floor(Math.random() * 1000);
};

const updateDefault = async (userKey, originObj, obj) => {
  const childKey = getKeyByValue(originObj, obj);
  return database.ref().child('User').child(userKey).child('Address').child(childKey).update({default: obj.default});
};

const addAddress = async (userKey, name, phone, location) => {
  const id = getId();
  return database.ref().child('User').child(userKey).child('Address').push({id, name, phone, location, "default": false});
};

const deleteAddress = async (userKey, originObj, obj) => {
  const childKey = getKeyByValue(originObj, obj);
  return database.ref().child('User').child(userKey).child('Address').child(childKey).remove();
};

const getKeyByValue = (obj, value) => {
  return Object.keys(obj).find(key => obj[key].id === value.id);
};

const Address = (props) => {
  const {addressList, userKey} = props;
  const [isModalShow, setModalShow] = useState(false);
  const [currentAddress, setCurrentAddress] = useState({});

  // useEffect(() => {
  //   console.log('uyuy', addressList);
  // }, [addressList]);

  const handleAddAddress = () => {
    // alert('address added');
    addAddress(userKey, currentAddress.name, currentAddress.phone, currentAddress.location).then(() => {
      console.log('added to address');
    }).catch((err) => {
      console.log(err);
    });
  };

  const handleBtnClick = () => {
    setModalShow(true);
  };

  const addressBody = addressList.map((address) => {
    return <AddressCard key={address.id} id={address.id} name={address.name} phone={address.phone} location={address.location} isDeafult={address.default} {...props} />;
  });

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <MyGoBack />
          <Text style={styles.title}>Address List</Text>
          <FontAwesomeIcon icon={faTimesCircle} size={20} style={{ visibility: 'hidden' }} />
        </View>
        {addressList.length > 0 
          ? addressBody
          : <Text>Opps...It looks like you have not added any address yet</Text>
        }
        <View style={styles.btnContainer}>
          <MyButton title={'Add address'} click={handleBtnClick} />
        </View>
      </View>
      {isModalShow && 
      <MyModal 
        title={'Add a new address'}
        content={<AddressInput setCurrentAddress={setCurrentAddress} />}
        isVisible={isModalShow} 
        setVisible={setModalShow}
        onSave={handleAddAddress}
      />
      }
    </>
  );
};

const AddressInput = (props) => {
  const {setCurrentAddress} = props;
  const [nameValue, setNameValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [locationValue, setLocationValue] = useState('');
  const [addressObj, setAddressObj] = useState({});


  useEffect(() => {
    // console.log('yzy1', addressObj);
    if (Object.keys(addressObj).length === 3) {
      // console.log('yzy2', addressObj);
      setCurrentAddress(addressObj);
    }
  }, [addressObj]);

  return (
    <View>
      <Text>Name: </Text>
      <TextInput 
        value={nameValue} 
        onChangeText={setNameValue} 
        onBlur={() => {
          setAddressObj((prev) => {
            prev["name"] = nameValue;
            const copy = {...prev};
            // console.log('name add', copy);
            return copy;
          });
        }} 
        style={styles.input} 
      />
      <Text>Mobile Phone: </Text>
      <TextInput 
        value={phoneValue} 
        onChangeText={setPhoneValue} 
        style={styles.input} 
        onBlur={() => {
          setAddressObj((prev) => {
            prev["phone"] = phoneValue;
            const copy = {...prev};
            // console.log('phone add', copy);
            return copy;
          });
        }} 
      />
      <Text>Address: </Text>
      <TextInput 
        value={locationValue} 
        onChangeText={setLocationValue} 
        style={styles.input} 
        onBlur={() => {
          setAddressObj((prev) => {
            prev["location"] = locationValue;
            const copy = {...prev};
            // console.log('location add', copy);
            return copy;
          });
        }} 
      />
    </View>
  );
};

const AddressCard = (props) => {
  const {id, name, phone, location, isDeafult, originAddressObj, userKey} = props;
  const [isDelete, setDelete] = useState(false);
  const [isEnabled, setIsEnabled] = useState(isDeafult);

  const handleDelete = () => {
    setDelete(true);
    // call api here
    deleteAddress(userKey, originAddressObj, {id, name, phone, location, "default": isEnabled}).then(() => {
      console.log('deleted');
    }).catch((err) => {
      console.log(err);
    });
  };

  
  const toggleSwitch = () => {
    setIsEnabled(prev => {
      const temp = !prev;
      return temp
    });
  };

  useEffect(() => {
    // update database
    updateDefault(userKey, originAddressObj, {id, name, phone, location, "default": isEnabled}).then(() => {
      console.log('updated');
    }).catch((err) => {
      console.log(err);
    });
  }, [isEnabled]);


  return (
    !isDelete &&
    <View style={styles.cardContainer}>
      <FontAwesomeIcon icon={isDeafult ? faHome : faMapMarkerAlt} size={30} />
      <View style={styles.column}>
        <View style={styles.rrow}>
          {isDeafult ? <Text style={styles.default}>DEFAULT</Text> : <Text style={styles.notDefault}>SET DEFAULT</Text>}
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
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
    height: '100%',
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: '#F6F8F9'
  },
  header: {
    marginVertical: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 20, 
    color: '#03045e',
    textAlign: 'center'
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
  rrow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  default: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    borderWidth: 1,
    borderColor: 'black',
    marginRight: 10,
    color: '#dc2f02'
  },
  notDefault: {
    fontStyle: 'italic',
    borderWidth: 1,
    borderColor: 'black',
    marginRight: 10
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