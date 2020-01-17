import React from 'react';
import styled from 'styled-components';
import smallChart from '../assets/small-chart.svg'

import SummaryLabel from './SummaryLabel';
import SummaryValue from './SummaryValue';
import Icon from './Icon';

function EachTransactionSummary({ summaryDetail }) {
  return (
    <Section>
      {summaryDetail.map(({ label, value }) => {
        return (
          <Span key={label}>
            <div>
              <SummaryLabel label={label} />
              <SummaryValue value={value} />
            </div>
            <div>
              <Icon name={smallChart} />
            </div>
          </Span>
        )
      })}
    </Section>
  )
}

const Section = styled.section`
  display: flex;
  justify-content: space-between;

  & span:last-child {
    margin-left: 0.625rem;
  }
`;

const Span = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  background: #FFFFFF;
  border: 1px solid #EEF8FD;
  box-sizing: border-box;
  border-radius: 2px;
  padding: 18px;

  & div {
    display: flex;
    flex-direction: column;
    margin-right: 0.938rem;
  }
`;

export default EachTransactionSummary;
