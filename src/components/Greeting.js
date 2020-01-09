import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Greeting({ greeting = 'Hello' }) {
  return <P>{greeting}</P>
}

Greeting.propTypes = {
  greeting: PropTypes.string.isRequired
}

const P = styled.p`
  font-family: 'Segoe UI';
  display: 'block';
  color: #647787;
  font-size: 0.625rem;
  line-height: 0.8125rem;
`;

export default Greeting;
