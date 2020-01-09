import React from 'react';
import styled from 'styled-components';
import Heading3 from './Heading3';
import TransactionLabel from './TransactionLabel';

function TransactionCharts() {
  return (
    <Section>
      <span>
        <p>Chart goes here</p>
      </span>
      <span>
        <span>
          <Heading3 title='Orders' />
          <TransactionLabel label='Pending Orders: 20' />
          <TransactionLabel label='Reconciling Orders: 80' />
          <TransactionLabel label='Total Orders: 100' />
        </span>
        <span>
          <Heading3 title='Payments' />
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
    border-right: 3px solid #EEF8FD;
  }

  & span:last-child span:first-child {
    border-bottom: 3px solid #EEF8FD;
  }
`;

export default TransactionCharts;
