import React from 'react';
import styled from 'styled-components';

import ShowOutOf from './ShowOutOf';
import TextTitle from './TextTitle';
import OptionSelector from './OptionSelector';

const list = [
  'All',
  'Reconcilled',
  'Un-reconcilled',
  'Settled',
  'Unsettled'
]

function Payments() {
  return (
    <PaymentSection>
      <p>Payments</p>
      <section>
        <ShowOutOf />
        <span>
          <TextTitle title='Show' />
          <OptionSelector optionList={list} />
        </span>
      </section>
    </PaymentSection>
  );
}

const PaymentSection = styled.section`
  display: flex;
  flex-direction: column;
  padding-right: 8.5rem;

  & p {
    font-family: 'Segoe UI';
    font-style: normal;
    font-size: 2.25rem;
    line-height: 3.0rem;
  }

  & section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: -1.25rem;

    & span:nth-child(2) {
      display: flex;
      justify-content: center;
      align-items: center;

      & h6 {
        margin-right: 1.0rem;
      }
    }

    & select:last-child {
      margin-top: -2.0rem;
    }
  }
`;

// const Title = styled.p``

export default Payments;
