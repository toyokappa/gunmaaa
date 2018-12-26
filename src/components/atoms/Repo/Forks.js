import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import RepoModel from '../../../models/Repo';

export default function Forks(props) {
  const { repo } = props;

  return (
    <RepoForks>
      <FontAwesomeIcon icon={['fas', 'code-branch']} />
      <Text>{repo.forks_count}</Text>
    </RepoForks>
  );
}

Forks.propTypes = {
  repo: PropTypes.instanceOf(RepoModel).isRequired,
};

const Text = styled.span`
  margin-left: 0.5rem;
`;

const RepoForks = styled.div`
  margin-right: 1rem;
  margin-left: auto;
`;
