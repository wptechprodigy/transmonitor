import React from 'react';
import styled from 'styled-components';

import ProductProperty from './ProductProperty';
import StatusIndicator from './StatusIndicator';

function productBadge({ value, color = '#CCCFD4' }) {
  return (
    <Badge color={color}>
      <StatusIndicator color={color} />
      <ProductProperty value={value} color={color} />
    </Badge>
  )
}

const Badge = styled.span`
  display: flex;
  place-items: center;
  width: 80%;
  height: 2.063rem;
  border: 1px solid ${props => props.color};
  border-radius: 1.875rem;

  & h4 {
    font-size: 0.75rem;
    line-height: 1.0rem;
  }

  & span:first-child {
    margin-right: 0.625rem;
    margin-left: 0.625rem;
  }
`;

export default productBadge;
