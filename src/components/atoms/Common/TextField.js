import React from 'react';
import styled from 'styled-components';

const TextField = styled.input.attrs({
  type: 'text',
})`
  font-size: 0.8rem;
  padding: 0.375rem 0.75rem;
  border: 1px solid lightgrey;
  border-radius: 0.25rem;
`;

const TextFieldComponent = ({ ...props }) => <TextField {...props} />;

export default TextFieldComponent;
