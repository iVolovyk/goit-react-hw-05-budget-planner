import { connect } from 'react-redux';
import { saveBudget } from '../../redux/budget/budgetActions';
import BudgetForm from './BudgetForm';

const mapDispatchToProps = {
  saveBudget,
};

export default connect(
  null,
  mapDispatchToProps,
)(BudgetForm);
