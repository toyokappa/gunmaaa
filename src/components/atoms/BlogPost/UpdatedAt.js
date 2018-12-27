import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';

export default function UpdatedAt(props) {
  const { datetime } = props;

  return (
    <PostUpdatedAt>
      <FontAwesomeIcon icon={['fas', 'sync-alt']} />
      <Date>{moment(datetime).format('YYYY.MM.DD')}</Date>
    </PostUpdatedAt>
  );
}

UpdatedAt.propTypes = {
  datetime: PropTypes.string.isRequired,
};

const PostUpdatedAt = styled.span`
  display: inline-block;
  font-size: 11px;
  background-color: #eee;
  padding: 5px 10px;
  border-radius: 10px;
`;

const Date = styled.span`
  margin-left: 0.25rem;
`;
