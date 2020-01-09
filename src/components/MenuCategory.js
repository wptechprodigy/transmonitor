import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

function MenuCategory({ menuName = 'Menu' }) {
  return <H3>{menuName}</H3>
}

MenuCategory.propTypes = {
  menuName: PropTypes.string.isRequired
}

const H3 = styled.h3`
  font-family: 'Segoe UI';
  font-weight: normal;
  font-size: 0.6875rem;
  line-height: 0.9375rem;
  color: #647787;
`;

export default MenuCategory;
