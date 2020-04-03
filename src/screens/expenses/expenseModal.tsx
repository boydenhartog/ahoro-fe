import React, { useCallback } from "react";
import { ActivityIndicator, StyleSheet, Text } from "react-native";
import { useDispatch } from "react-redux";
import Modal from "../../components/modal";
import MotionBlock from "../../components/motionBlock";
import Overlay from "../../components/overlay";
import { useFixerSymbolList } from "../../hooks/fixerApi";
import { Colors } from "../../styles";
import Form from "./form";
import { hideExpenseModal } from "../../store/actions/ui";

export default function ExpenseModal() {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useFixerSymbolList();
  const closeModal = useCallback(() => dispatch(hideExpenseModal), [dispatch]);

  return (
    <>
      <Overlay onClose={closeModal}></Overlay>
      <MotionBlock style={styles.modalContainer}>
        <Modal
          title="Add expense"
          buttonText="Close modal"
          closeHandler={closeModal}
        >
          {isLoading && (
            <ActivityIndicator size="large" color={Colors.primary} />
          )}

          {!isLoading && !isError && data && data.symbols && (
            <Form symbols={data.symbols} onClose={closeModal} />
          )}

          {!isLoading && isError && (
            <Text>
              Something went wrong.. {"\n"}
              Please try again later
            </Text>
          )}
        </Modal>
      </MotionBlock>
    </>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    marginTop: 80,
    flex: 1,
    top: 0,
    position: "absolute",
    zIndex: 10,
    backgroundColor: Colors.white,
    borderRadius: 6
  }
});
