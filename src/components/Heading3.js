import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Heading3({ title = 'Title' }) {
  return <H3>{title}</H3>
}

Heading3.propTypes = {
  title: PropTypes.string
}

const H3 = styled.h3`
  font-family: 'Segoe UI';
  font-weight: bold;
  font-size: 0.875rem;
  line-height: 1.188rem;
  color: #262626;
`;

export default Heading3;
