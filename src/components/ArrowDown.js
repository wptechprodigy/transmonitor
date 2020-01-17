import React from 'react';
import styled from 'styled-components';

import listDownArrow from '../assets/list-down-arrow.svg';

function ArrowDown() {
  return (
    <Span>
      <img src={listDownArrow} alt='more' />
    </Span>
  );
}

const Span = styled.span`
  display: flex;
  place-items: center;
  cursor: pointer;
`;

export default ArrowDown;
