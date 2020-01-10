import React from 'react';
import styled from 'styled-components';

import Heading3 from './Heading3';
import TransactionLabel from './TransactionLabel';
import ProgressBar from './ProgressBar';

function TransactionCharts({ transactions }) {
  const { orders, payments } = transactions;

  return (
    <Section>
      <Chart>
        <p>Chart goes here</p>
      </Chart>
      <TransactionOverview>
        <OrderOverview>
          <Heading3 title='Orders' />
          <ProgressBar percent={Number(orders[1].value)} />
          {orders.map(({ label, value, color }) => <TransactionLabel key={label} color={color} label={label} value={value} />)}
        </OrderOverview>
        <OrderOverview>
          <Heading3 title='Payments' />
          <ProgressBar percent={Number(payments[1].value)} />
          {payments.map(({ label, value, color }) => <TransactionLabel key={label} color={color} label={label} value={value} />)}
        </OrderOverview>
      </TransactionOverview>
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
  border-radius: 2px;
  margin-top: 30px;
`;

const Chart = styled.section`
  width: 65%;
  border-right: 4px solid #EEF8FD;
  padding-left: 30px;
  padding-right: 30px;
`;

const TransactionOverview = styled.section`
  display: flex;
  flex-direction: column;
  width: 35%;

  & section:first-child {
    border-bottom: 4px solid #EEF8FD;
  }
`;

const OrderOverview = styled.section`

  height: 100%;
  padding-left: 20px;
`;

export default TransactionCharts;
