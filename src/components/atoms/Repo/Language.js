import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import RepoModel from '../../../models/Repo';

export default function Language(props) {
  const { repo } = props;
  const repoLang = repo.language ? (
    <RepoLang>
      <FontAwesomeIcon icon={['fas', 'file-code']} />
      <Text>{repo.language}</Text>
    </RepoLang>
  ) : null;

  return repoLang;
}

Language.propTypes = {
  repo: PropTypes.instanceOf(RepoModel).isRequired,
};

const Text = styled.span`
  margin-left: 0.5rem;
`;

const RepoLang = styled.div``;
