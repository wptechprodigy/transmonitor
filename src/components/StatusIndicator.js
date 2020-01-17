import React from 'react';
import styled from 'styled-components';

function StatusIndicator({ color }) {
  return <Dot color={color}></Dot>
}

const Dot = styled.span`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: ${props => props.color};
`;

export default StatusIndicator;

