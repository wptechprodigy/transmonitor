import React from 'react';
import styled from 'styled-components';
import Heading3 from './Heading3';
import TransactionLabel from './TransactionLabel';

const transactions = {
  orders: [
    {
      label: 'Pending Orders',
      value: '20',
      color: '#FDC203'
    },
    {
      label: 'Reconciling Orders',
      value: '80',
      color: '#27AE60'
    },
    {
      label: 'Total Orders',
      value: '100',
      color: '#1875F0'
    }
  ],
  payments: [
    {
      label: 'Un-reconcilled Payments',
      value: '20',
      color: '#FDC203'
    },
    {
      label: 'Reconcilled Payments',
      value: '80',
      color: '#27AE60'
    },
    {
      label: 'Total Payments',
      value: '100',
      color: '#1875F0'
    }
  ]
}

function TransactionCharts() {
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
    /* border-right: 3px solid #EEF8FD; */
  }
`;

export default TransactionCharts;
