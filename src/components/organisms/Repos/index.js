import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Repo from '../../molecules/Repo';
import GithubModel from '../../../models/Github';

export default function Repos(props) {
  const { repos } = props;

  return (
    <Repositories>
      {repos.size
        ? repos.valueSeq().map(repo => <Repo key={repo.id} repo={repo} />)
        : null}
    </Repositories>
  );
}

Repos.propTypes = {
  repos: PropTypes.instanceOf(GithubModel).isRequired,
};

const Repositories = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
