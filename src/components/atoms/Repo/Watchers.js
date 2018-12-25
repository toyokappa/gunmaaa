import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import RepoModel from '../../../models/Repo';

export default function Watchers(props) {
  const { repo } = props;

  return (
    <RepoWatchers>
      <FontAwesomeIcon icon={['fas', 'eye']} />
      <Text>{repo.watchers_count}</Text>
    </RepoWatchers>
  );
}

Watchers.propTypes = {
  repo: PropTypes.instanceOf(RepoModel).isRequired,
};

const Text = styled.span`
  margin-left: 0.5rem;
`;

const RepoWatchers = styled.div``;
