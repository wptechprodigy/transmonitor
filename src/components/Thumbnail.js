import React from 'react';
import styled from 'styled-components';

function Thumbnail({ children, imgName }) {
  return (
    <Span>
      {imgName && <img src={imgName} alt={imgName} />}
      {children}
    </Span>
  )
}

const Span = styled.span`
  width: 36px;
  height: 36px;
  color: #fff;

  & img {
    border-radius: 50%;
  }
`;

export default Thumbnail;
