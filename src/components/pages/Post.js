import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import moment from 'moment';

import rootActions from '../../actions';
import PostModel from '../../models/Post';

import BaseLayout from '../templates/BaseLayout';
import { Markdown } from '../atoms/Common';

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
        <DateTimeArea>
          <CreatedAt>
            作成日:
            {moment(post.createdAt).format('YYYY.MM.DD HH:mm')}
          </CreatedAt>
          <UpdatedAt>
            更新日:
            {moment(post.updatedAt).format('YYYY.MM.DD HH:mm')}
          </UpdatedAt>
        </DateTimeArea>
        <Markdown body={post.body} />
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

const DateTimeArea = styled.div`
  text-align: right;
`;

const CreatedAt = styled.span`
  font-size: 14px;
  margin-right: 0.5rem;
`;

const UpdatedAt = styled.span`
  font-size: 14px;
`;

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
