import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Label, Textarea } from '../../atoms/Common';

export default function ContentInput(props) {
  const { name, value, errors, onChange } = props;
  const errorTags = errors.map(error => <li key={error}>{error}</li>);

  return (
    <ContentField>
      <Label htmlFor={name}>内容</Label>
      <Field name={name} value={value} errors={errors} onChange={onChange} />
      {errors ? <Errors>{errorTags}</Errors> : null}
    </ContentField>
  );
}

ContentInput.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  errors: PropTypes.arrayOf(PropTypes.array),
  onChange: PropTypes.func.isRequired,
};

ContentInput.defaultProps = {
  value: '',
  errors: [],
};

const ContentField = styled.div`
  margin-bottom: 1.25rem;

  & > textarea {
    display: block;
  }
`;

const Field = styled(Textarea)`
  width: 100%;
  border-color: ${props => (props.errors.length > 0 ? 'red' : 'lightgrey')};
  box-sizing: border-box;
`;

const Errors = styled.ul`
  list-style: none;
  color: red;
  font-size: 0.8rem;
  padding: 0;
  margin: 0.5rem 0 0;
`;
