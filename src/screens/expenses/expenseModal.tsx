import React from "react";
import { StyleSheet, Text, ActivityIndicator } from "react-native";
import { useDispatch } from "react-redux";
import { Colors } from "../../styles";
import { useFixerSymbolList } from "../../hooks/fixerApi";
import Modal from "../../components/modal";
import Overlay from "../../components/overlay";
import MotionBlock from "../../components/motionBlock";
import Form from "./form";

export default function ExpenseModal() {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useFixerSymbolList();

  return (
    <>
      <Overlay
        onClose={() => dispatch({ type: "HIDE_EXPENSE_MODAL" })}
      ></Overlay>
      <MotionBlock style={styles.modalContainer}>
        <Modal
          title="Add expense"
          buttonText="Close modal"
          closeHandler={() => dispatch({ type: "HIDE_EXPENSE_MODAL" })}
        >
          {isLoading && (
            <ActivityIndicator size="large" color={Colors.primary} />
          )}

          {!isLoading && !isError && data && data.symbols && <Form symbols={data.symbols} />}

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
    marginTop: 40,
    flex: 1,
    top: 0,
    position: "absolute",
    zIndex: 10,
    backgroundColor: Colors.white,
    borderRadius: 6
  }
});
