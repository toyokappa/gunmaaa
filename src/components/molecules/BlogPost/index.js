import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';

import PostModel from '../../../models/Post';

export default function BlogPost(props) {
  const { post } = props;
  const postTags = post.tags.map((tag, i) => (
    // eslint-disable-next-line react/no-array-index-key
    <PostTag to={`/blog/tags/${tag}`} key={i}>
      {tag}
    </PostTag>
  ));

  return (
    <Container>
      <EyeCatch to={`/blog/${post.slug}`} />
      <PostInfo>
        <PostCreatedAt>
          <FontAwesomeIcon icon={['fas', 'pencil-alt']} />
          <Date>{moment(post.createdAt).format('YYYY.MM.DD')}</Date>
        </PostCreatedAt>
        <PostUpdatedAt>
          <FontAwesomeIcon icon={['fas', 'sync-alt']} />
          <Date>{moment(post.updatedAt).format('YYYY.MM.DD')}</Date>
        </PostUpdatedAt>
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
  box-sizing: border-box;
  border: 1px solid #263238;
  border-radius: 5px;
  margin-bottom: 1rem;
  margin-right: 2%;

  &:nth-child(3) {
    margin-right: 0;
  }
`;

const EyeCatch = styled(Link)`
  display: block;
  width: 100%;
  height: 200px;
  background-image: url('https://liginc.co.jp/wp-content/uploads/2014/11/win-mac-a1.jpg');
  background-size: cover;
  background-position: center center;
  border-radius: 4px 4px 0 0;
`;

const PostInfo = styled.div`
  padding: 20px;
`;

const PostCreatedAt = styled.span`
  display: inline-block;
  font-size: 11px;
  background-color: #eee;
  padding: 5px;
  border-radius: 10px;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`;

const PostUpdatedAt = styled.span`
  display: inline-block;
  font-size: 11px;
  background-color: #eee;
  padding: 5px 10px;
  border-radius: 10px;
  margin-bottom: 0.5rem;
`;

const Date = styled.span`
  margin-left: 0.25rem;
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

const PostTag = styled(Link)`
  display: inline-block;
  font-size: 11px;
  color: black;
  background-color: #eee;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 10px;
  margin-right: 0.5rem;
`;
