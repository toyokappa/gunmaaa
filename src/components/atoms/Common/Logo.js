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
  @import url('https://fonts.googleapis.com/css?family=Fugaz+One');

  font-size: 30px;
  font-family: 'Fugaz One', cursive;
  line-height: 1;
  margin: 0;

  & > a {
    color: white;
    text-decoration: none;
  }
`;
