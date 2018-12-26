import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Name, Description, Language, Forks, Stars } from '../../atoms/Repo';
import RepoModel from '../../../models/Repo';

export default function Repo(props) {
  const { repo } = props;

  return (
    <Container>
      <Name repo={repo} />
      <Description repo={repo} />
      <RepoInfo>
        <Language repo={repo} />
        <Forks repo={repo} />
        <Stars repo={repo} />
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

const RepoInfo = styled.div`
  display: flex;
  font-size: 14px;
`;
