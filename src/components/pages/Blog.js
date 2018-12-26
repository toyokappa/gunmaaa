import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import rootActions from '../../actions';
import BaseLayout from '../templates/BaseLayout';
import BlogPosts from '../organisms/BlogPosts';

import BlogModel from '../../models/Blog';

class Blog extends Component {
  componentDidMount() {
    this.parseBlog();
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (prevProps.location.pathname === location.pathname) return;

    this.parseBlog();
  }

  parseBlog() {
    const { match, requestBlog, requestBlogWithTag } = this.props;
    const { postTag } = match.params;
    if (postTag) {
      requestBlogWithTag(postTag);
    } else {
      requestBlog();
    }
  }

  render() {
    const { blog, isFetching } = this.props;

    return (
      <BaseLayout isFetching={isFetching}>
        <h1>Blog</h1>
        <BlogPosts posts={blog.posts} />
      </BaseLayout>
    );
  }
}

Blog.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      postTag: PropTypes.string,
    }),
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  requestBlog: PropTypes.func.isRequired,
  requestBlogWithTag: PropTypes.func.isRequired,
  blog: PropTypes.instanceOf(BlogModel).isRequired,
  isFetching: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    blog: state.blogReducer.blog,
    error: state.blogReducer.error,
    isFetching: state.blogReducer.isFetching,
  };
}

function mapDispatchtoProps(dispatch) {
  return {
    requestBlog: () => {
      dispatch(rootActions.requestBlog());
    },

    requestBlogWithTag: postTag => {
      dispatch(rootActions.requestBlogWithTag(postTag));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(Blog);
