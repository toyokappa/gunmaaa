import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Select } from '../../atoms/Common';

export default function CategorySelect(props) {
  const { name, value, options, onChange } = props;

  return (
    <CategoryField>
      <Label htmlFor={name}>種別</Label>
      <Select name={name} value={value} options={options} onChange={onChange} />
    </CategoryField>
  );
}

CategorySelect.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string]))
    .isRequired,
  onChange: PropTypes.func.isRequired,
};

CategorySelect.defaultProps = {
  value: '',
};

const Label = styled.label`
  display: inline-block;
  margin-bottom: 0.5rem;
`;

const CategoryField = styled.div`
  & > select {
    display: block;
    margin-bottom: 1rem;
  }
`;
