import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import RepoModel from '../../../models/Repo';

export default function Stars(props) {
  const { repo } = props;

  return (
    <RepoStars>
      <FontAwesomeIcon icon={['fas', 'star']} />
      <Text>{repo.stargazers_count}</Text>
    </RepoStars>
  );
}

Stars.propTypes = {
  repo: PropTypes.instanceOf(RepoModel).isRequired,
};

const Text = styled.span`
  margin-left: 0.5rem;
`;

const RepoStars = styled.div``;
