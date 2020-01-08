import React from 'react';
import styled from 'styled-components'

function NavLink({ name, path}) {
  return <A as='a' href={path}>{name}</A>;
}

const A = styled.a`
  font-family: 'Segoe UI';
  font-weight: normal;
  font-size: 0.875rem;
  line-height: 1.188rem;
  color: #647787;
`;

export default NavLink;
