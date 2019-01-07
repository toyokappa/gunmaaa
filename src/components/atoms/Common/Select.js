import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
  font-size: 0.8rem;
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 0.25rem;
  height: calc(1.28rem + 0.75rem + 2px);
`;

const SelectComponent = ({ ...props }) => {
  const { options } = props;
  const optionTags = options.map(option => (
    <option value={option} key={option}>
      {option}
    </option>
  ));

  return <Select {...props}>{optionTags}</Select>;
};

export default SelectComponent;
