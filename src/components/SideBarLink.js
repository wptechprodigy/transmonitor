import React from 'react';
import styled from 'styled-components';

import MenuCategory from './MenuCategory';
import Icon from './Icon';



function SideBarLink({ category }) {
  const { name, links } = category;

  return (
    <Span>
      <MenuCategory menuName={name} />
      {links.map(({ icon, linkName, path, active }) => {
        return (
          <span>
            <Icon name={icon} />
            <A as='a' href={path}>{linkName}</A>
          </span>
        );
      })}
    </Span>
  )
}

const Span = styled.span`
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;

  & h3:first-child {
    margin: 0.9375rem 0;
  }

  & span {
    display: flex;
    margin-bottom: 0.9375rem;

    & img {
      margin-right: 0.9375rem;
    }
  }

  & span:first-child {
    background: #1875F0;
    opacity: 0.1;
  }
`;

const A = styled.a`
  font-family: 'Segoe UI';
  text-decoration: none;
  font-size: 0.6875rem;
  line-height: 0.9375rem;
`;

export default SideBarLink;
