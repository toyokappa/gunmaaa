import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';

export default function CreatedAt(props) {
  const { datetime } = props;

  return (
    <PostCreatedAt>
      <FontAwesomeIcon icon={['fas', 'pencil-alt']} />
      <Date>{moment(datetime).format('YYYY.MM.DD')}</Date>
    </PostCreatedAt>
  );
}

CreatedAt.propTypes = {
  datetime: PropTypes.string.isRequired,
};

const PostCreatedAt = styled.span`
  display: inline-block;
  font-size: 11px;
  background-color: #eee;
  padding: 5px 10px;
  border-radius: 10px;
  margin-right: 0.5rem;
`;

const Date = styled.span`
  margin-left: 0.25rem;
`;
