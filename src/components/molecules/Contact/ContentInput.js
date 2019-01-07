import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Textarea } from '../../atoms/Common';

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
  & > textarea {
    display: block;
    margin-bottom: 1rem;
  }
`;

const Label = styled.label`
  display: inline-block;
  margin-bottom: 0.5rem;
`;

const Field = styled(Textarea)`
  border-color: ${props => (props.errors.length > 0 ? 'red' : 'lightgrey')};
`;

const Errors = styled.ul`
  color: red;
`;
