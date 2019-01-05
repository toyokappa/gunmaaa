import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { TextInput } from '../../atoms/Common';

export default function EmailInput(props) {
  const { name, value, onChange } = props;

  return (
    <EmailField>
      <Label for={name}>メールアドレス</Label>
      <TextInput name={name} value={value} onChange={onChange} />
    </EmailField>
  );
}

EmailInput.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

EmailInput.defaultProps = {
  value: '',
};

const Label = styled.label`
  display: inline-block;
  margin-bottom: 0.5rem;
`;

const EmailField = styled.div`
  & > input {
    display: block;
    margin-bottom: 1rem;
  }
`;
