import React from 'react';
import styled from 'styled-components';

const Submit = styled.input.attrs({
  type: 'submit',
  value: '送信する',
})`
  color: white;
  background-color: #00bfa5;
  font-size: 0.8rem;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  padding: 0.375rem 0.75rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:hover {
    background-color: #109789;
  }
`;

const SubmitComponent = ({ ...props }) => <Submit {...props} />;

export default SubmitComponent;
