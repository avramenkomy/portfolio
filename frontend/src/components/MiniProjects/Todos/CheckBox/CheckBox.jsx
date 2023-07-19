import React from 'react';
import propTypes from 'prop-types';

import './index.css';

function CheckBox(props) {
  const { children, ...rest_props } = props;

  return (
    <div className="checkboxes__item">
      <label className="checkbox style-a">
        <input type="checkbox" className="checkbox__input" {...rest_props} />
        <div className="check__container">
          <div className="checkbox__checkmark"></div>
          <div className="checkbox__body">{children}</div>
        </div>
      </label>
    </div>
  )
}

CheckBox.propTypes = {
  children: propTypes.node,
  onChange: propTypes.func,
}

export default CheckBox;
