import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

function SummaryValue({ value }) {
  return <H2>{value}</H2>;
}

SummaryValue.propTypes = {
  value: PropTypes.string.isRequired
}

const H2 = styled.h2`
  font-family: 'Segoe UI';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #262626;
`;

export default SummaryValue;
