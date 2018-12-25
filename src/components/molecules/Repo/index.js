import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import RepoModel from '../../../models/Repo';

export default function Repo(props) {
  const { repo } = props;

  return (
    <Container>
      <RepoName href={repo.url} target="_blank" rel="noopener noreferrer">
        {repo.name}
      </RepoName>
      <RepoDesc>{repo.description}</RepoDesc>
      <RepoInfo>
        <RepoLang>
          <FontAwesomeIcon icon={['fas', 'file-code']} />
          <Text>{repo.language}</Text>
        </RepoLang>
        <RepoForks>
          <FontAwesomeIcon icon={['fas', 'code-branch']} />
          <Text>{repo.forks_count}</Text>
        </RepoForks>
        <RepoStars>
          <FontAwesomeIcon icon={['fas', 'star']} />
          <Text>{repo.stargazers_count}</Text>
        </RepoStars>
        <RepoWatchers>
          <FontAwesomeIcon icon={['fas', 'eye']} />
          <Text>{repo.watchers_count}</Text>
        </RepoWatchers>
      </RepoInfo>
    </Container>
  );
}

Repo.propTypes = {
  repo: PropTypes.instanceOf(RepoModel).isRequired,
};

const Container = styled.div`
  width: 49.5%;
  box-sizing: border-box;
  padding: 20px;
  border: 1px solid #263238;
  border-radius: 5px;
  margin-bottom: 1rem;
  margin-right: 1%;

  &:nth-child(even) {
    margin-right: 0;
  }
`;

const RepoName = styled.a`
  display: block;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  margin-bottom: 1rem;
`;

const RepoDesc = styled.div`
  font-size: 16px;
  margin-bottom: 1rem;
`;

const RepoInfo = styled.div`
  display: flex;
  font-size: 14px;
`;

const Text = styled.span`
  margin-left: 0.5rem;
`;

const RepoLang = styled.div`
  margin-right: auto;
`;

const RepoForks = styled.div`
  margin-right: 1rem;
`;

const RepoStars = styled.div`
  margin-right: 1rem;
`;

const RepoWatchers = styled.div``;
