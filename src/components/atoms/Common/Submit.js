import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Submit(props) {
  const { value } = props;

  return <Field type="submit" value={value} />;
}

Submit.propTypes = {
  value: PropTypes.string,
};

Submit.defaultProps = {
  value: '送信',
};

const Field = styled.input`
  color: white;
  background-color: #00bfa5;
  min-width: 7rem;
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
