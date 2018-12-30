import React from 'react';
import styled from 'styled-components';

import BaseLayout from '../templates/BaseLayout';
import Logo from '../atoms/Common/Logo';

export default function Home() {
  return (
    <BaseLayout>
      <Container>
        <Header>
          <Top>
            <Logo size="100" />
            <SubTitle>日本の「ど真ん中」からテクノロジーを発信!!!</SubTitle>
          </Top>
        </Header>
      </Container>
    </BaseLayout>
  );
}

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 8px;
  margin: 1.5rem auto;
`;

const Header = styled.header`
  display: flex;
  width: 100%;
  height: 600px;
  background-image: url('http://livedoor.blogimg.jp/cyclist_s/imgs/2/f/2f76dae9.jpg');
  background-size: cover;
  background-position: center center;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
`;

const Top = styled.div`
  text-align: center;
  color: white;
`;

const SubTitle = styled.h2`
  font-size: 18px;
  font-weight: normal;
  margin: 0;
`;
