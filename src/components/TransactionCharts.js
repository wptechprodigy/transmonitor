import React from 'react';
import styled from 'styled-components';

import Heading3 from './Heading3';
import TransactionLabel from './TransactionLabel';

function TransactionCharts({ transactions }) {
  const { orders, payments } = transactions;

  return (
    <Section>
      <span>
        <p>Chart goes here</p>
      </span>
      <span>
        <span>
          <Heading3 title='Orders' />
          {orders.map(({ label, value, color }) => <TransactionLabel color={color} label={label} value={value} />)}
        </span>
        <span>
          <Heading3 title='Payments' />
          {payments.map(({ label, value, color }) => <TransactionLabel color={color} label={label} value={value} />)}
        </span>
      </span>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  width: 100%;
  min-width: 1068px;
  min-height: 330px;
  background: #FFFFFF;
  border: 1px solid #EEF8FD;
  box-sizing: border-box;
  border-radius: 2px;
  margin-top: 30px;

  & span:first-child {
    width: 65%;
  }
`;

export default TransactionCharts;
