import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Stat from '../Stat';

const Container = styled.section`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

const Values = ({ budget, expenses, balance }) => (
  <Container>
    <Stat label="Budget" value={budget} isPositive />
    <Stat label="Expenses" value={expenses} />
    <Stat label="Balance" value={balance} isPositive={balance >= 0} />
  </Container>
);

Values.defaultProps = {
  budget: 0,
  expenses: 0,
  balance: 0,
};

Values.propTypes = {
  budget: PropTypes.number,
  expenses: PropTypes.number,
  balance: PropTypes.number,
};

export default Values;
