import React from 'react';
import styled from 'styled-components';

const Textarea = styled.textarea.attrs({
  rows: 5,
})`
  font-size: 0.8rem;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
`;

const TextareaComponent = ({ ...props }) => <Textarea {...props} />;

export default TextareaComponent;
