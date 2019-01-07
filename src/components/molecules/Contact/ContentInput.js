import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Textarea } from '../../atoms/Common';

export default function ContentInput(props) {
  const { name, value, errors, onChange } = props;
  const errorTags = errors.map(error => <li>{error}</li>);

  return (
    <ContentField>
      <Label for={name}>内容</Label>
      <Textarea name={name} value={value} errors={errors} onChange={onChange} />
      {errors ? <Errors>{errorTags}</Errors> : null}
    </ContentField>
  );
}

ContentInput.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  errors: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])),
  onChange: PropTypes.func.isRequired,
};

ContentInput.defaultProps = {
  value: '',
  errors: [],
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

const Errors = styled.ul`
  color: red;
`;
