import React from 'react';
import styled from 'styled-components';

import TextTitle from './TextTitle';

function ShowOutOf() {
  return (
    <Span>
      <TextTitle title='Showing' />
      <select>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option selected value='20'>20</option>
      </select>
      <TextTitle title='out of 500 payments' />
    </Span>
  )
}

const Span = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  /* padding-top: 20px; */

  & h6:first-child {
    margin-left: -25px
  }

  & select {
    margin: -35px 10px 0 10px;
    color: #1875F0;
    outline: none;
    border: 0;
    background-color: #e5e5e5;
  }
`;

export default ShowOutOf;
