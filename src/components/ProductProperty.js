import React from 'react';
import styled from 'styled-components';

function ProductProperty({ value, color }) {
  return <Property color={color}>{value}</Property>
}

const Property = styled.h4`
  font-family: 'Segoe UI';
  font-style: normal;
  font-weight: normal;
  font-size: 0.875rem;
  line-height: 1.188rem;
  color: ${props => props.color || '#7F8FA4'};
`;

export default ProductProperty;

