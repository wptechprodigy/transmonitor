import React from 'react';
import styled from 'styled-components';

import oluwaleke from '../assets/oluwaleke.svg';
import Thumbnail from './Thumbnail';
import Greeting from './Greeting';
import UserName from './UserName';

function UserInfo() {
  return (
    <Span>
      <Section>
        <Greeting greeting='Hello' />
        <UserName username='Oluwaleke Ojo' />
      </Section>
      <Thumbnail imgName={oluwaleke} />
    </Span>
  );
}

const Span = styled.span`
  display: flex;
  place-items: center;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  & p:first-child {
    margin-bottom: -15px;
  }
`;

export default UserInfo;
