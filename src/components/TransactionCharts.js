import React from 'react';
import styled from 'styled-components';

import Heading3 from './Heading3';
import TransactionLabel from './TransactionLabel';
import ProgressBar from './ProgressBar';
import Today from './Today';
import ChartScroller from './ChartScroller';
import Icon from './Icon';
import bigChart from '../assets/big-graph.svg';

function TransactionCharts({ transactions }) {
  const { orders, payments } = transactions;

  return (
    <Section>
      <Chart>
        <ChartHeading>
          <Today />
          <ChartScroller />
        </ChartHeading>
        <Graph>
          <Icon name={bigChart} />
        </Graph>
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
  min-width: 66.75rem;
  min-height: 21.88rem;
  background: #FFFFFF;
  border: 1px solid #EEF8FD;
  border-radius: 2px;
  margin-top: 30px;
`;

const Chart = styled.section`
  display: flex;
  flex-direction: column;
  width: 65%;
  border-right: 4px solid #EEF8FD;
`;

const ChartHeading = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
`;

const Graph = styled(Chart)`
  width: 100%;
  height: 100%;
  padding: 0;

  & img {
    width: 100%;
    margin-top: 4.063rem;
  }
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
