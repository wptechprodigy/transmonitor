import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Heading1({ title = 'Logo' }) {
  return <H1>{title}</H1>
}

Heading1.propTypes = {
  title: PropTypes.string
}

const H1 = styled.h1`
  font-family: 'Roboto', sans-serif;
  color: #1875F0;
  font-weight: 900;
  font-size: 1.50rem;
  line-height: 1.75rem;
`;

export default Heading1;
