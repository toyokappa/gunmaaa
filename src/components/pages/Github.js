import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import rootActions from '../../actions';
import BaseLayout from '../templates/BaseLayout';
import Repo from '../molecules/Repo';
import GithubModel from '../../models/Github';

class Github extends Component {
  componentDidMount() {
    const { requestGithub } = this.props;
    requestGithub();
  }

  render() {
    const { github, isFetching } = this.props;
    return (
      <BaseLayout isFetching={isFetching}>
        <h1>GitHub</h1>
        <Repos>
          {github.repos.size
            ? github.repos
                .valueSeq()
                .map(repo => <Repo key={repo.id} repo={repo} />)
            : null}
        </Repos>
      </BaseLayout>
    );
  }
}

Github.propTypes = {
  requestGithub: PropTypes.func.isRequired,
  github: PropTypes.instanceOf(GithubModel).isRequired,
  isFetching: PropTypes.bool.isRequired,
};

const Repos = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

function mapStateToProps(state) {
  return {
    github: state.githubReducer.github,
    error: state.githubReducer.error,
    isFetching: state.githubReducer.isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    requestGithub: () => {
      dispatch(rootActions.requestGithub());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Github);
