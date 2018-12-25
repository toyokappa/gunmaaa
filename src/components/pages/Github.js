import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import rootActions from '../../actions';
import BaseLayout from '../templates/BaseLayout';
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
        {github.repos.size
          ? github.repos
              .valueSeq()
              .map(repo => <div key={repo.id}>{repo.fullName}</div>)
          : null}
      </BaseLayout>
    );
  }
}

Github.propTypes = {
  requestGithub: PropTypes.func.isRequired,
  github: PropTypes.instanceOf(GithubModel).isRequired,
  isFetching: PropTypes.bool.isRequired,
};

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
