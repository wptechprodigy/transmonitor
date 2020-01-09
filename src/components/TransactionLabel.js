import React from 'react';
import styled from 'styled-components';

function TransactionLabel({ label }) {
  return <Label>{label}</Label>
}

const Label = styled.h3`
  font-family: 'Segoe UI';
  font-weight: normal;
  margin-top: 0.3125rem;
  font-size: 0.875rem;
  line-height: 1.188rem;
  color: #262626;
`;

export default TransactionLabel;
