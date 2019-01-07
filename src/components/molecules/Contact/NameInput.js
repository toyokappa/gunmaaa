import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Label, TextField } from '../../atoms/Common';

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
  margin-bottom: 1.25rem;

  & > input {
    display: block;
  }
`;

const Field = styled(TextField)`
  width: 100%;
  border-color: ${props => (props.errors.length > 0 ? 'red' : 'lightgrey')};
  box-sizing: border-box;
`;

const Errors = styled.ul`
  list-style: none;
  color: red;
  font-size: 0.8rem;
  padding: 0;
  margin: 0.5rem 0 0;
`;
