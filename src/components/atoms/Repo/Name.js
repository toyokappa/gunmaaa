import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import RepoModel from '../../../models/Repo';

export default function Name(props) {
  const { repo } = props;

  return (
    <RepoName href={repo.url} target="_blank" rel="noopener noreferrer">
      {repo.name}
    </RepoName>
  );
}

Name.propTypes = {
  repo: PropTypes.instanceOf(RepoModel).isRequired,
};

const RepoName = styled.a`
  display: block;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  margin-bottom: 1rem;
`;
