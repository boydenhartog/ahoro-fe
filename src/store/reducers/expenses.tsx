
const expenses = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        {
          id: action.id,
          amount: action.amount,
          currency: action.currency,
          date: action.date,
          short_description: action.short_description,
          user_id: action.user_id,
        }
      ]
    case 'PLUS_EXPENSE':
      return [
        ...state,
        {
          id: 1,
          amount: 10,
          currency: 'EUR',
          date: Date.now(),
          short_description: 'TEST EXPENSE',
          user_id: 1,
        }
      ]
    default:
      return state
  }
}
export default expenses;