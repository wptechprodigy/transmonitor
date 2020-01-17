import React from 'react';
import styled from 'styled-components';

function Button({ btnName = 'Button' }) {
  return (
    <Span>
      <GenInvoice style={{backgroundColor: '#27AE60'}}>{btnName}</GenInvoice>
    </Span>
  )
}

const Span = styled.span`
  & button:hover {
    cursor: pointer;
  }
`;

const GenInvoice = styled.button`
  font-family: 'Roboto';
  font-weight: 500;
  background-color: '#27AE60';
  color: #fff;
  border-radius: 1.875rem;
  text-transform: uppercase;
  border: none;
  width: fit-content;
  margin-top: 2.188rem;
  margin-bottom: 2.188rem;
  padding: 0.5625rem 1.563rem;
`;

export default Button;
