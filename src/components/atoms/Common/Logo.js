import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Logo(props) {
  const { size, color } = props;
  return (
    <Title size={size} color={color}>
      Gunmaaa!!!
    </Title>
  );
}

Logo.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

Logo.defaultProps = {
  size: 30,
  color: '#fff',
};

const Title = styled.h1`
  @import url('https://fonts.googleapis.com/css?family=Fugaz+One');

  font-size: ${props => props.size}px;
  font-family: 'Fugaz One', cursive;
  line-height: 1;
  color: ${props => props.color};
  margin: 0;
`;
