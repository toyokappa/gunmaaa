import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import rootActions from '../../actions';
import BaseLayout from '../templates/BaseLayout';
import PostModel from '../../models/Post';

class Post extends Component {
  componentDidMount() {
    const { requestPost } = this.props;
    requestPost(this.getPostIdFromUrl());
  }

  getPostIdFromUrl() {
    const { match } = this.props;
    return match.params.postId;
  }

  render() {
    const { post, isFetching } = this.props;

    return (
      <BaseLayout isFetching={isFetching}>
        <h1>{post.title}</h1>
        <div>
          <span>
            作成日:
            {post.createdAt}
          </span>
          <span>
            更新日:
            {post.createdAt}
          </span>
        </div>
        <div>{post.body}</div>
      </BaseLayout>
    );
  }
}

Post.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      postId: PropTypes.string,
    }),
  }).isRequired,
  requestPost: PropTypes.func.isRequired,
  post: PropTypes.instanceOf(PostModel).isRequired,
  isFetching: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    post: state.postReducer.post,
    error: state.postReducer.error,
    isFetching: state.postReducer.isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    requestPost: postId => {
      dispatch(rootActions.requestPost(postId));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
