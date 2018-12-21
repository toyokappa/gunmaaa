import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import rootActions from '../../actions';
import BaseLayout from '../templates/BaseLayout';

import BlogModel from '../../models/Blog';

class Blog extends Component {
  componentDidMount() {
    const { requestBlog } = this.props;
    requestBlog();
  }

  render() {
    const { blog, isFetching } = this.props;
    const blogIndex = blog.posts.size
      ? blog.posts.valueSeq().map(post => <div key={post.id}>{post.title}</div>)
      : null;
    return (
      <BaseLayout isFetching={isFetching}>
        <h1>Blog</h1>
        {blogIndex}
      </BaseLayout>
    );
  }
}

Blog.propTypes = {
  requestBlog: PropTypes.func.isRequired,
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
  };
}

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(Blog);
