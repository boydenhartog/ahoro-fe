import React, { ReactNode } from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import { useSelector } from 'react-redux';
import Button from './button';

type ModalProps = {
  title: String,
  buttonText: String,
  closeHandler: () => void,
  children: ReactNode,
}

function CustomModal(props: ModalProps) {
  const ui = useSelector(state => state.ui);

  return (
      <Modal
        visible={ui.showExpenseModal}
        animationType={'slide'}
        onRequestClose={() => props.closeHandler()}
        transparent
      >
        <View style={styles.container}>
          <View style={styles.modalContainer}>
            <Text style={styles.title}>{props.title}</Text>
              {props.children}
              <Button 
                text={props.buttonText}
                pressHandler={() => props.closeHandler()}
              />
          </View>
        </View>
      </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000080',
  },
  modalContainer: {
    borderRadius: 6,
    width: 320,
    padding: 12,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 32,
    color: '#4A4A4A',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default CustomModal;