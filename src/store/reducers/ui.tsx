import { SHOW_EXPENSE_MODAL, HIDE_EXPENSE_MODAL } from "../actionTypes";

const ui = (state = { showExpenseModal: false }, action) => {
  switch (action.type) {
    case SHOW_EXPENSE_MODAL:
      return {
        ...state,
        showExpenseModal: true
      };
    case HIDE_EXPENSE_MODAL:
      return {
        ...state,
        showExpenseModal: false
      };
    default:
      return state;
  }
};
export default ui;
