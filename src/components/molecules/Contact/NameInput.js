import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { TextField } from '../../atoms/Common';

export default function NameInput(props) {
  const { name, value, errors, onChange } = props;
  const errorTags = errors.map(error => <li key={error}>{error}</li>);

  return (
    <NameField>
      <Label htmlFor={name}>名前</Label>
      <Field name={name} value={value} errors={errors} onChange={onChange} />
      {errors ? <Errors>{errorTags}</Errors> : null}
    </NameField>
  );
}

NameInput.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  errors: PropTypes.arrayOf(PropTypes.array),
  onChange: PropTypes.func.isRequired,
};

NameInput.defaultProps = {
  value: '',
  errors: [],
};

const NameField = styled.div`
  & > input {
    display: block;
    margin-bottom: 1rem;
  }
`;

const Label = styled.label`
  display: inline-block;
  margin-bottom: 0.5rem;
`;

const Field = styled(TextField)`
  border-color: ${props => (props.errors.length > 0 ? 'red' : 'lightgrey')};
`;

const Errors = styled.ul`
  color: red;
`;
