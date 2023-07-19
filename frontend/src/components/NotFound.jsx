import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <h2>
      This NotFound component!!!Redirect to <Link to="/">Home</Link>
    </h2>
  )
}

export default NotFound;
