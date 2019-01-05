import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { TextInput } from '../../atoms/Common';

export default function NameInput(props) {
  const { name, value, onChange } = props;

  return (
    <NameField>
      <Label for={name}>名前</Label>
      <TextInput name={name} value={value} onChange={onChange} />
    </NameField>
  );
}

NameInput.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

NameInput.defaultProps = {
  value: '',
};

const Label = styled.label`
  display: inline-block;
  margin-bottom: 0.5rem;
`;

const NameField = styled.div`
  & > input {
    display: block;
    margin-bottom: 1rem;
  }
`;
