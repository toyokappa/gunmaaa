import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { OrderedMap } from 'immutable';

import BlogPost from '../../molecules/BlogPost';

export default function BlogPosts(props) {
  const { posts } = props;

  return (
    <Posts>
      {posts.size
        ? posts.valueSeq().map(post => <BlogPost key={post.id} post={post} />)
        : null}
    </Posts>
  );
}

BlogPosts.propTypes = {
  posts: PropTypes.instanceOf(OrderedMap).isRequired,
};

const Posts = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
