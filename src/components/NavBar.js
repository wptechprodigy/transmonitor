import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import NavMenu from './NavMenu';
import UserInfo from './UserInfo';

function NavBar({ navItems }) {
  const { logoTitle, navLinks } = navItems;

  return (
    <NavBarSection>
      <Logo title={logoTitle} />
      <NavRight>
        <NavMenu navLinks={navLinks} />
        <UserInfo />
      </NavRight>
    </NavBarSection>
  )
}

const NavBarSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 15px 80px 15px 42px;
  box-shadow: 0px 4px 10px rgba(79, 79, 79, 0.07);
  background-color: #fff;

  & span:first-child {
    margin-right: 20px;
  }
`;

const NavRight = styled.section`
  display: flex;
  align-items: center;

  & span {
    margin-left: 10px;
  }
`;

export default NavBar;
