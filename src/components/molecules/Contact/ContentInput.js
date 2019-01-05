import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Textarea } from '../../atoms/Common';

export default function ContentInput(props) {
  const { name, value, onChange } = props;

  return (
    <ContentField>
      <Label for={name}>内容</Label>
      <Textarea name={name} value={value} onChange={onChange} />
    </ContentField>
  );
}

ContentInput.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

ContentInput.defaultProps = {
  value: '',
};

const Label = styled.label`
  display: inline-block;
  margin-bottom: 0.5rem;
`;

const ContentField = styled.div`
  & > textarea {
    display: block;
    margin-bottom: 1rem;
  }
`;
