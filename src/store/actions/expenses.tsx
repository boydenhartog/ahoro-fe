import { ADD_EXPENSE } from "../actionTypes";

export interface Expense {
  amount: number;
  currency: string;
  date: any;
  shortDescription: string;
}

export const addExpense = (expense: Expense) => ({
  type: ADD_EXPENSE,
  payload: {
    amount: expense.amount,
    currency: expense.currency,
    date: expense.date,
    shortDescription: expense.shortDescription,
  }
});

export const removeExpense = expenseId => ({
  type: "REMOVE_EXPENSE",
  id: expenseId
});