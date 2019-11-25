import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../shared/Form';
import Label from '../shared/Label';
import Input from '../shared/Input';
import Button from '../shared/Button';

const labelStyles = `
  margin-bottom: 16px;  
`;

class BudgetForm extends Component {
  state = { budget: '' };

  handleChange = e => {
    this.setState({
      budget: e.target.value,
    });
  };

  handleSubmit = e => {
    const { budget } = this.state;
    const { saveBudget } = this.props;
    e.preventDefault();
    saveBudget(budget);
    this.setState({ budget: '' });
  };

  render() {
    const { budget } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter your total budget
          <Input
            type="number"
            value={budget}
            onChange={this.handleChange}
            required
          />
        </Label>

        <Button label="Save" type="submit" />
      </Form>
    );
  }
}

BudgetForm.propTypes = {
  saveBudget: PropTypes.func.isRequired,
};

export default BudgetForm;
