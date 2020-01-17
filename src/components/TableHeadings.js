import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function TableHeadings({ label = '' }) {
  return <Th>{label}</Th>
}

const Th = styled.th`
  font-family: 'Segoe UI';
  font-style: normal;
  font-weight: normal;
  font-size: 0.875rem;
  line-height: 1.188rem;
  color: #7F8FA4;
`;

TableHeadings.propTypes = {
  label: PropTypes.string.isRequired
}

export default TableHeadings;
