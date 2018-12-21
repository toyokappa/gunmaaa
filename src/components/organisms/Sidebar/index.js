import React from 'react';
import { Link } from 'react-router-dom';

import { Logo } from '../../atoms/Common';

export default function Sidebar() {
  return (
    <div>
      <Logo />
      <Link to="/blog">Blog</Link>
    </div>
  );
}
