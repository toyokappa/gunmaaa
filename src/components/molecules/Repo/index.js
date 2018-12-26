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
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 1rem;
  margin-right: 1%;
  box-sizing: border-box;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  &:nth-child(even) {
    margin-right: 0;
  }
`;

const RepoInfo = styled.div`
  display: flex;
  font-size: 14px;
`;
