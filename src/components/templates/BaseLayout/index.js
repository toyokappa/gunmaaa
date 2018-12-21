import React from 'react';

import Sidebar from '../../organisms/Sidebar';

export default function BaseLayout(props) {
  const { children } = props;

  return (
    <div>
      <Sidebar />
      <div>{children}</div>
    </div>
  );
}
