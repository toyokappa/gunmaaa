import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Loading } from '../../atoms/Common';
import Sidebar from '../../organisms/Sidebar';

export default function BaseLayout(props) {
  const { children, isFetching } = props;

  return (
    <BaseContainer>
      <Sidebar />
      {isFetching ? null : <Main>{children}</Main>}
      {isFetching ? <Loading /> : null}
    </BaseContainer>
  );
}

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
  isFetching: PropTypes.bool,
};

BaseLayout.defaultProps = {
  isFetching: false,
};

const BaseContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-left: 16rem;
`;

const Main = styled.div`
  padding: 0 30px;
`;
