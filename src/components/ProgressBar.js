import React from 'react';
import styled from 'styled-components';

import Progress from './Progress';

function ProgressBar({ percent }) {
  return (
    <Tracker>
      <Progress percent={percent} />
    </Tracker>
  )
}

const Tracker = styled.span`
  display: block;
  width: 90%;
  height: 0.25rem;
  background-color: #FDC203;
  margin-top: 0.625rem;
  margin-bottom: 0.625rem;
  box-shadow: inset 0 0 #FDC203;
`;

export default ProgressBar;
