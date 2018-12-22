import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export default function Loading() {
  return (
    <LoadingContainer>
      <LoadingSpinner>
        <FontAwesomeIcon icon="spinner" size="3x" spin />
      </LoadingSpinner>
    </LoadingContainer>
  );
}

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: table;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1000;
`;

const LoadingSpinner = styled.div`
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  color: white;
`;
