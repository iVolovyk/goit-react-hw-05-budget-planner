export const getExpensesList = state => {
  return state.expenses;
};

export const getExpenses = state => {
  return state.expenses.reduce((total, expense) => total + expense.amount, 0);
};
