import React from 'react';
import styled from 'styled-components';

import { Logo, NavItem } from '../../atoms/Common';

export default function Sidebar() {
  return (
    <SideContainer>
      <Logo />
      <Nav>
        <NavItem to="/blog" icon={['fas', 'blog']}>
          Blog
        </NavItem>
        <NavItem to="/github" icon={['fab', 'github']}>
          GitHub
        </NavItem>
      </Nav>
    </SideContainer>
  );
}

const SideContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 16rem;
  height: 100vh;
  background-color: #263238;
  padding: 20px 10px;
  box-sizing: border-box;
  box-shadow: 2px 0 4px -1px rgba(0, 0, 0, 0.2), 4px 0 5px 0 rgba(0, 0, 0, 0.14),
    1px 0 10px 0 rgba(0, 0, 0, 0.12);
`;

const Nav = styled.ul`
  list-style: none;
  padding-left: 0;
`;
