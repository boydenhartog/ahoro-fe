import { ADD_EXPENSE } from "../actionTypes";

const expenses = (state = [], action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return [
        ...state,
        {
          amount: action.payload.amount,
          currency: action.payload.currency,
          date: action.payload.date,
          shortDescription: action.payload.shortDescription,
        }
      ];
    default:
      return state;
  }
}
export default expenses;