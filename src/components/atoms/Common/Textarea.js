import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Textarea(props) {
  const { name, value, rows, onChange } = props;

  return (
    <Field
      id={name}
      name={name}
      value={value}
      rows={rows}
      onChange={onChange}
    />
  );
}

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  rows: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

Textarea.defaultProps = {
  value: '',
  rows: 5,
};

const Field = styled.textarea`
  font-size: 0.8rem;
  padding: 0.375rem 0.75rem;
  border: 1px solid lightgrey;
  border-radius: 0.25rem;
`;
