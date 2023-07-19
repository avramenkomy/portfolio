import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import propTypes from 'prop-types';

function CustomLink ({to, children, ...props}) {
  const match = useMatch({
    path: to,
    end: to.length === 1,
  });

  return (
    <Link
      to={to}
      className={match ? 'active-link' : ''}
      {...props}
    >
      {children}
    </Link>
  )
}

CustomLink.propTypes = {
  to: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
}

export default CustomLink;
