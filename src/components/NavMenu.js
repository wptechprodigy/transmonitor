import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import NavLink from './NavLink';

function NavMenu({ navLinks }) {
  return (
    <NavListSection>
      {navLinks.map(({ name, path }) => <NavLink key={name} name={name} path={path} />)}
    </NavListSection>
  )
}

NavMenu.propTypes = {
  navLinks: PropTypes.array.isRequired
}

const NavListSection = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & a {
    margin-right: 40px;
    text-decoration: none;
  }
`;

export default NavMenu;

