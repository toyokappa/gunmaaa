import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Label, TextField } from '../../atoms/Common';

export default function EmailInput(props) {
  const { name, value, errors, onChange } = props;
  const errorTags = errors.map(error => <li key={error}>{error}</li>);

  return (
    <EmailField>
      <Label htmlFor={name}>メールアドレス</Label>
      <Field name={name} value={value} errors={errors} onChange={onChange} />
      {errors ? <Errors>{errorTags}</Errors> : null}
    </EmailField>
  );
}

EmailInput.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  errors: PropTypes.arrayOf(PropTypes.array),
  onChange: PropTypes.func.isRequired,
};

EmailInput.defaultProps = {
  value: '',
  errors: [],
};

const EmailField = styled.div`
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
