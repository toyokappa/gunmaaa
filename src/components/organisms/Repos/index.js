import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { OrderedMap } from 'immutable';

import Repo from '../../molecules/Repo';

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
  repos: PropTypes.instanceOf(OrderedMap).isRequired,
};

const Repositories = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
