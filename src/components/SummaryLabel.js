import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

function SummaryLabel({ label }) {
  return <H4>{label}</H4>;
}

SummaryLabel.propTypes = {
  label: PropTypes.string.isRequired
}

const H4 = styled.h4`
  font-family: 'Segoe UI';
  font-style: normal;
  font-weight: normal;
  font-size: 0.75rem;
  line-height: 1.0rem;
  color: #787C90;
  margin-bottom: -15px;
`;

export default SummaryLabel;
