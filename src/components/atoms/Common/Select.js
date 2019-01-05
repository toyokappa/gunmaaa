import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Select(props) {
  const { name, value, options, onChange } = props;
  const optionTags = options.map(option => (
    <option value={option} key={option}>
      {option}
    </option>
  ));

  return (
    <Field name={name} value={value} onChange={onChange}>
      {optionTags}
    </Field>
  );
}

Select.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string]))
    .isRequired,
  onChange: PropTypes.func.isRequired,
};

Select.defaultProps = {
  value: '',
};

const Field = styled.select`
  font-size: 0.8rem;
  border: 1px solid lightgrey;
  border-radius: 0.25rem;
  height: calc(1.28rem + 0.75rem + 2px);
`;
