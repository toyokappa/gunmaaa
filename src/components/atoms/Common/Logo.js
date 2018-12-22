import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Logo() {
  return (
    <Title>
      <Link to="/">Gunmaaa!!!</Link>
    </Title>
  );
}

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  line-height: 1;

  & > a {
    color: white;
    text-decoration: none;
  }
`;
