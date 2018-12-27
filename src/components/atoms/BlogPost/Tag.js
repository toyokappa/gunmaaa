import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function CreatedAt(props) {
  const { tag } = props;

  return <PostTag to={`/blog/tags/${tag}`}>{tag}</PostTag>;
}

CreatedAt.propTypes = {
  tag: PropTypes.string.isRequired,
};

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
