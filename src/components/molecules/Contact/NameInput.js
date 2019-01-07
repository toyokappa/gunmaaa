import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { TextInput } from '../../atoms/Common';

export default function NameInput(props) {
  const { name, value, errors, onChange } = props;
  const errorTags = errors.map(error => <li>{error}</li>);

  return (
    <NameField>
      <Label for={name}>名前</Label>
      <TextInput
        name={name}
        value={value}
        errors={errors}
        onChange={onChange}
      />
      {errors ? <Errors>{errorTags}</Errors> : null}
    </NameField>
  );
}

NameInput.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  errors: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])),
  onChange: PropTypes.func.isRequired,
};

NameInput.defaultProps = {
  value: '',
  errors: [],
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

const Errors = styled.ul`
  color: red;
`;
