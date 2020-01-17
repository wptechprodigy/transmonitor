import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function ProductTitle({ title = 'Product Title' }) {
  return <Title>{title}</Title>
}

const Title = styled.h4`
  font-family: 'Segoe UI';
  font-style: normal;
  font-weight: normal;
  font-size: 0.875rem;
  line-height: 1.188rem;
  color: #414042;
`;

ProductTitle.propTypes = {
  title: PropTypes.string.isRequired
}

export default ProductTitle;
