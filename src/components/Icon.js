import React from 'react';
import PropTypes from 'prop-types';

function Icon({ name }) {
  return <img src={name} alt={name} />
}

Icon.propTypes = {
  name: PropTypes.string.isRequired
}

export default Icon;
