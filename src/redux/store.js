import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import budgetReducer from './budget/budgetReducer';
import expensesReducer from './expenses/expensesReducer';

const rootReducer = combineReducers({
  budget: budgetReducer,
  expenses: expensesReducer,
});

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
