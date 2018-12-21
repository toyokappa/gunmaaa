import React from 'react';
import PropTypes from 'prop-types';

import Sidebar from '../../organisms/Sidebar';

export default function BaseLayout(props) {
  const { children, isFetching } = props;

  return (
    <div>
      <Sidebar />
      <div>{children}</div>
      {isFetching ? <div>loading...</div> : null}
    </div>
  );
}

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
  isFetching: PropTypes.bool.isRequired,
};
