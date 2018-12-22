import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function NavItem(props) {
  const { to, icon, children } = props;
  return (
    <Item>
      <Link to={to}>
        <FontAwesomeIcon icon={icon} />
        <NavText>{children}</NavText>
      </Link>
    </Item>
  );
}

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
};

const Item = styled.li`
  & > a {
    display: block;
    color: white;
    text-decoration: none;
    padding: 10px 0;
  }
`;

const NavText = styled.span`
  margin-left: 0.5rem;
`;
