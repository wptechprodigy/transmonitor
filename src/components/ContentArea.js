import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import SideBarLinks from './SideBarLinks';

function ContentArea({ sideBarItems }) {
  return (
    <Section>
      <SideBar>
        <Button btnName='Generate Invoice' />
        <SideBarLinks sideBarItems={sideBarItems} />
      </SideBar>
      <MainContent>Main content</MainContent>
    </Section>
  );
}

const Section = styled.section`
  display: grid;
  grid-template-columns: 18% 82%;
  height: 100vh;
`;

const SideBar = styled.section`
  display: flex;
  flex-direction: column;
  padding-left: 35px;
  /* place-items: center; */
`;

const MainContent = styled.section`
  background-color: #E5E5E5;
`;

export default ContentArea;
