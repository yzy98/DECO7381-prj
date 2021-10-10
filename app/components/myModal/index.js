import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Pressable, Button, Modal} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

const MyModal = (props) => {
  const {title, content, isVisible, setVisible, onSave, saveText, noClose} = props;

  return (
    <Modal
      animationType={'none'}
      transparent={true}
      visible={isVisible}
      style={styles.container}
    >
      <View style={styles.overlay}>
        <View style={styles.modal}>
          {!noClose &&
            <Pressable 
              style={styles.close}
              onPress={() => {
                setVisible(false);
              }}
            >
              <FontAwesomeIcon icon={faTimes} size={20} />
            </Pressable>
          }
          <Text style={styles.title}>{title}</Text>
          {content}
          <View style={styles.btnRow}>
            <Button 
              onPress={() => {
                onSave();
                setVisible(false);
              }} 
              title={saveText ? saveText : 'save'}
            />
          </View>    
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    borderColor: 'none'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  modal: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center'
  },
  btnRow: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20
  },
  title: {
    fontSize: 20, 
    color: '#03045e',
    marginBottom: 20
  },
  close: {
    position: 'absolute',
    top: 10,
    right: 10
  }
});

export default MyModal;