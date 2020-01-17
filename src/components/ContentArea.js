import React from 'react';
import styled from 'styled-components';

import Button from './Button';
import SideBarLinks from './SideBarLinks';
import TransactionsSummary from './TransactionsSummary';
import TransactionCharts from './TransactionCharts';
import Payments from './Payments';
import TransactionTable from './TransactionTable';

function ContentArea({ sideBarItems, transactionSummary, transactions }) {
  return (
    <Section>
      <SideBar>
        <Button btnName='Generate Invoice' />
        <SideBarLinks sideBarItems={sideBarItems} />
      </SideBar>
      <MainContent>
        <TransactionsSummary summary={transactionSummary} />
        <TransactionCharts transactions={transactions} />
        <Payments />
        <TransactionTable />
      </MainContent>
    </Section>
  );
}

const Section = styled.section`
  display: grid;
  grid-template-columns: 18% 82%;
  height: 100vh;
`;

const SideBar = styled.section`
  display: flex;
  flex-direction: column;
  padding-left: 2.188rem;
`;

const MainContent = styled.section`
  display: flex;
  flex-direction: column;
  background: #E5E5E5;
  padding-top: 2.188rem;
  padding-left: 1.875rem;
  padding-right: 5rem;
`;

export default ContentArea;
