import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { CreatedAt, UpdatedAt, Tag } from '../../atoms/BlogPost';
import PostModel from '../../../models/Post';

export default function BlogPost(props) {
  const { post } = props;
  // eslint-disable-next-line react/no-array-index-key
  const postTags = post.tags.map((tag, i) => <Tag tag={tag} key={i} />);

  return (
    <Container>
      <EyeCatch to={`/blog/${post.slug}`} src={post.eyeCatchUrl} />
      <PostInfo>
        <PostDate>
          <CreatedAt datetime={post.createdAt} />
          <UpdatedAt datetime={post.updatedAt} />
        </PostDate>
        <PostTitle to={`/blog/${post.slug}`}>{post.title}</PostTitle>
        <PostDesc>{post.description}</PostDesc>
        {postTags}
      </PostInfo>
    </Container>
  );
}

BlogPost.propTypes = {
  post: PropTypes.instanceOf(PostModel).isRequired,
};

const Container = styled.div`
  width: 32%;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 1rem;
  margin-right: 2%;
  box-sizing: border-box;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  &:nth-child(3) {
    margin-right: 0;
  }
`;

const EyeCatch = styled(Link)`
  display: block;
  width: 100%;
  height: 200px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center center;
  border-radius: 4px 4px 0 0;
`;

const PostInfo = styled.div`
  padding: 20px;
`;

const PostDate = styled.div`
  margin-bottom: 0.5rem;
`;

const PostTitle = styled(Link)`
  display: block;
  color: black;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  margin-bottom: 0.5rem;
`;

const PostDesc = styled.div`
  font-size: 13px;
  line-height: 1.5;
  margin-bottom: 0.75rem;
`;
