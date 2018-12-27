import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import rootActions from '../../actions';
import PostModel from '../../models/Post';

import BaseLayout from '../templates/BaseLayout';
import { CreatedAt, UpdatedAt, Tag } from '../atoms/BlogPost';
import { Markdown } from '../atoms/Common';

class Post extends Component {
  componentDidMount() {
    const { requestPost } = this.props;
    requestPost(this.getPostSlugFromUrl());
  }

  getPostSlugFromUrl() {
    const { match } = this.props;
    return match.params.postSlug;
  }

  render() {
    const { post, isFetching } = this.props;
    // eslint-disable-next-line react/no-array-index-key
    const postTags = post.tags.map((tag, i) => <Tag tag={tag} key={i} />);

    return (
      <BaseLayout isFetching={isFetching}>
        <PostContainer>
          <EyeCatch src={post.eyeCatchUrl} />
          <PostContent>
            <PostHeader>
              <PostDate>
                <CreatedAt datetime={post.createdAt} />
                <UpdatedAt datetime={post.updatedAt} />
              </PostDate>
              <PostTitle>{post.title}</PostTitle>
              <PostDesc>{post.description}</PostDesc>
              <PostTags>{postTags}</PostTags>
            </PostHeader>
            <PostBody>
              <Markdown body={post.body} />
            </PostBody>
          </PostContent>
        </PostContainer>
      </BaseLayout>
    );
  }
}

Post.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      postSlug: PropTypes.string,
    }),
  }).isRequired,
  requestPost: PropTypes.func.isRequired,
  post: PropTypes.instanceOf(PostModel).isRequired,
  isFetching: PropTypes.bool.isRequired,
};

const PostContainer = styled.div`
  width: 75%;
  box-sizing: border-box;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 8px;
  margin: 1.5rem auto;
`;

const EyeCatch = styled.div`
  display: block;
  width: 100%;
  height: 500px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center center;
  border-radius: 7px 7px 0 0;
`;

const PostContent = styled.div`
  padding: 0 30px 30px;
`;

const PostHeader = styled.div`
  padding: 1.5rem 0;
  border-bottom: 1px solid lightgrey;
  margin-bottom: 1.5rem;
`;

const PostDate = styled.div`
  margin-bottom: 0.75rem;
`;

const PostTitle = styled.h1`
  margin: 0 0 0.5rem;
`;

const PostDesc = styled.div`
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const PostBody = styled.div``;

const PostTags = styled.div``;

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
