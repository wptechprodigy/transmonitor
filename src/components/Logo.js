import React from 'react';
import styled from 'styled-components';
import Heading1 from './Heading1';

function Logo({ title }) {
  return (
    <LogoSpan>
      <Heading1 title={title} />
    </LogoSpan>
  )
}

const LogoSpan = styled.span`
  &:hover {
    cursor: pointer;
  }
`;

export default Logo;
