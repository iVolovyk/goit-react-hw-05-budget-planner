import { connect } from 'react-redux';
import { compose } from 'redux';
import withRenderLog from '../hoc/withRenderLog';
import { removeExpense } from '../../redux/expenses/expensesActions';
import { getExpensesList } from '../../redux/expenses/expensesSelectors';
import ExpensesTable from './ExpensesTable';

const mapStateToProps = state => ({
  expenses: getExpensesList(state),
});

const mapDispatchToProps = {
  removeExpense,
};

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(ExpensesTable);

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  withRenderLog,
)(ExpensesTable);
