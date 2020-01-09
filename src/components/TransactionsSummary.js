import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import EachTransactionSummary from './EachTransactionSummary';

function TransactionsSummary({ summary }) {
  return (
    <Section>
      <EachTransactionSummary summaryDetail={summary.daily} />
      <EachTransactionSummary summaryDetail={summary.total} />
    </Section>
  )
}

TransactionsSummary.propTypes = {
  summary: PropTypes.object.isRequired
}

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default TransactionsSummary;

