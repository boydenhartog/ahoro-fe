import React, { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import Button from './button';
import { TouchableOpacity } from 'react-native-gesture-handler';

type ModalProps = {
  title: String,
  buttonText: String,
  closeHandler: () => void,
  children: ReactNode,
}

function CustomModal(props: ModalProps) {
  const ui = useSelector(state => state.ui);
  
  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <TouchableOpacity onPress={() => props.closeHandler()}>
        </TouchableOpacity>
        <Text style={styles.title}>{props.title}</Text>
        {props.children}
        {/* <View style={styles.buttonContainer}>
          <Button
            text={props.buttonText}
            pressHandler={() => props.closeHandler()}
          />
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  modalContainer: {
    borderRadius: 6,
    width: 320,
    // height: 600,
    padding: 12,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 32,
    color: '#4A4A4A',
    marginTop: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    display: 'flex',
    marginTop: 20,
    alignItems: 'center',
  },
});

export default CustomModal;