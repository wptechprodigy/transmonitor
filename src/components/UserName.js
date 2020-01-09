import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function UserName({ username = 'Jon' }) {
  return <P>{username}</P>
}

UserName.propTypes = {
  username: PropTypes.string.isRequired
}

const P = styled.p`
  font-family: 'Segoe UI';
  color: #647787;
  font-size: 0.875rem;
  line-height: 1.188rem;
`;

export default UserName;

