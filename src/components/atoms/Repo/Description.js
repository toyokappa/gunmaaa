import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import RepoModel from '../../../models/Repo';

export default function Description(props) {
  const { repo } = props;

  return <RepoDesc>{repo.description}</RepoDesc>;
}

Description.propTypes = {
  repo: PropTypes.instanceOf(RepoModel).isRequired,
};

const RepoDesc = styled.div`
  font-size: 16px;
  margin-bottom: 1rem;
`;
