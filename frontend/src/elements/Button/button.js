import React from 'react';
import propTypes from 'prop-types';

import './index.css';

function Button({ children, onClick, disabled }, props) {
  return (
    <button
      className="button"
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: propTypes.node.isRequired,
  onClick: propTypes.func.isRequired,
  disabled: propTypes.bool,
}

export default Button;
