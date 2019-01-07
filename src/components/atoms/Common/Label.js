import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  font-size: 0.9rem;
  display: inline-block;
  margin-bottom: 0.5rem;
`;

const LabelComponent = ({ ...props }) => {
  const { children } = props;
  return <Label {...props}>{children}</Label>;
};

export default LabelComponent;
