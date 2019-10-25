import { connect } from 'react-redux';
import getBudget from '../../redux/budget/budgetSelectors';
import { getExpenses } from '../../redux/expenses/expensesSelectors';
import Values from './Values';

const mapStateToProps = state => ({
  budget: getBudget(state),
  expenses: getExpenses(state),
  balance: getBudget(state) - getExpenses(state),
});

export default connect(mapStateToProps)(Values);
