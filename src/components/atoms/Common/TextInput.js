import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function TextInput(props) {
  const { name, value, errors, onChange } = props;

  return (
    <Field
      type="text"
      id={name}
      name={name}
      value={value}
      errors={errors}
      onChange={onChange}
    />
  );
}

TextInput.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  errors: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])),
  onChange: PropTypes.func.isRequired,
};

TextInput.defaultProps = {
  value: '',
  errors: [],
};

const Field = styled.input`
  font-size: 0.8rem;
  padding: 0.375rem 0.75rem;
  border: 1px solid ${props => (props.errors.length > 0 ? 'red' : 'lightgrey')};
  border-radius: 0.25rem;
`;
