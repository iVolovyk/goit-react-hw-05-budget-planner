import { Type } from './expensesActions';

const expensesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case Type.ADD_EXPENSE:
      return [payload, ...state];

    case Type.REMOVE_EXPENSE:
      return state.filter(expense => expense.id !== payload);

    default:
      return state;
  }
};

export default expensesReducer;
