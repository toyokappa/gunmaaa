import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import RepoModel from '../../../models/Repo';
import colors from '../../../vendor/GithubLangColor/colors.json';

export default function Language(props) {
  const { repo } = props;
  const repoLang = repo.language ? (
    <RepoLang>
      <Icon langColor={colors[repo.language].color}>
        <FontAwesomeIcon icon={['fas', 'file-code']} />
      </Icon>
      <Text>{repo.language}</Text>
    </RepoLang>
  ) : null;

  return repoLang;
}

Language.propTypes = {
  repo: PropTypes.instanceOf(RepoModel).isRequired,
};

const Icon = styled.span`
  color: ${props => props.langColor || '#000'};
`;

const Text = styled.span`
  margin-left: 0.5rem;
`;

const RepoLang = styled.div``;
