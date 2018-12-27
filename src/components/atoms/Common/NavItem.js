import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function NavItem(props) {
  const { isActive, to, icon, children } = props;
  console.log(isActive);
  return (
    <Item isActive={isActive}>
      <Link to={to}>
        <FontAwesomeIcon icon={icon} />
        <NavText>{children}</NavText>
      </Link>
    </Item>
  );
}

NavItem.propTypes = {
  isActive: PropTypes.bool.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
};

const Item = styled.li`
  & > a {
    display: block;
    color: white;
    background-color: ${props => (props.isActive ? '#00BFA5' : 'none')};
    text-decoration: none;
    padding: 20px;
    transition-duration: 0.5s;
    &:hover {
      background-color: ${props =>
        props.isActive ? '#00BFA5' : 'rgba(255, 255, 255, 0.1)'};
    }
  }
`;

const NavText = styled.span`
  margin-left: 0.5rem;
`;
