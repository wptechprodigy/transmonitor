import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function OptionSelector({ optionList }) {
  return (
    <Select>
      {optionList.map(item => <option key={item} value={item}>{item}</option>)}
    </Select>
  )
}

OptionSelector.propTypes = {
  optionList: PropTypes.array.isRequired
}

const Select = styled.select`
  font-family: 'Segoe UI';
  padding: 10px 15px;
  background: #e5e5e5;
  border: 1px solid #CED0DA;
  width: 9.375rem;
  color: #414042;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;

  background-image:
    linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%);
  background-position:
    calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px),
    calc(100% - .5em) .5em;
  background-size:
    5px 5px,
    5px 5px,
    1.5em 1.5em;
  background-repeat: no-repeat;


  & ~:hover {
    border: none;
    outline-color: #e5e5e5;
  }
`;

export default OptionSelector;
