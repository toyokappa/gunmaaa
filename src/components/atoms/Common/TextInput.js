import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function TextInput(props) {
  const { name, value, onChange } = props;

  return <Field type="text" name={name} value={value} onChange={onChange} />;
}

TextInput.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

TextInput.defaultProps = {
  value: '',
};

const Field = styled.input`
  font-size: 0.8rem;
  padding: 0.375rem 0.75rem;
  border: 1px solid lightgrey;
  border-radius: 0.25rem;
`;
