import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Label, Select } from '../../atoms/Common';

export default function CategorySelect(props) {
  const { name, value, onChange } = props;

  return (
    <CategoryField>
      <Label htmlFor={name}>種別</Label>
      <Field
        name={name}
        value={value}
        options={['仕事の依頼', 'とにかく話したい', 'その他']}
        onChange={onChange}
      />
    </CategoryField>
  );
}

CategorySelect.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

CategorySelect.defaultProps = {
  value: '',
};

const CategoryField = styled.div`
  margin-bottom: 1.25rem;

  & > select {
    display: block;
  }
`;

const Field = styled(Select)`
  width: 100%;
  box-sizing: border-box;
`;
