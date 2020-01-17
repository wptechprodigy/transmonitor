import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function TextTitle({ title = 'Title' }) {
  return <H6>{title}</H6>
}

TextTitle.propTypes = {
  title: PropTypes.string
}

const H6 = styled.h6`
  font-family: 'Segoe UI';
  font-weight: normal;
  margin-top: -5px;
  font-size: 0.813rem;
  line-height: 1.063rem;
  color: #000;
`;

export default TextTitle;
