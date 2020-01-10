import React from 'react';
import styled from 'styled-components';

function Progress({ percent }) {
  return <ProgressSpan percent={percent} />
}

const ProgressSpan = styled.span`
  display: block;
  width: ${props => props.percent}%;
  height: 100%;
  background-color: #27AE60;
`;

export default Progress;
