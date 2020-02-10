
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  id: expense.id,
  amount: expense.amount,
  currency: expense.currency,
  date: expense.date,
  short_description: expense.short_description,
  user_id: expense.user_id,
});

export const plus = () => ({
  type: 'PLUS_EXPENSE',
});

export const removeExpense = (expenseId) => ({
  type: 'REMOVE_EXPENSE',
  id: expenseId,
});

export const showExpenseModal = () => ({
  type: 'SHOW_EXPENSE_MODAL',
});

export const hideExpenseModal = () => ({
  type: 'HIDE_EXPENSE_MODAL',
});
