import React from 'react';
import styled from 'styled-components';

import leftArrow from '../assets/left-arrow.svg';
import rightArrow from '../assets/right-arrow.svg';
import Icon from './Icon';

function ChartScroller() {
  return (
    <Scroller>
      <Icon name={leftArrow} />
      <Icon name={rightArrow} />
    </Scroller>
  )
}

const Scroller = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.625rem;

  & img {
    cursor: pointer;
  }

  & img:last-child {
    margin-left: 0.625rem;
  }
`;

export default ChartScroller;
