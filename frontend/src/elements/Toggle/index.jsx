import React from 'react';
import './index.css';

const Toggle = ({ value, onChange }) => (
  
  <div className='toggle-switch'>
    <label htmlFor="toggler" className="toggle__label">
      <input
        id="toggler"
        type="checkbox"
        className="toggle__input"
        onClick={onChange}
        checked={value}
        readOnly
      />
      <span className='slider'></span>
    </label>   
  </div>
  
)

export default Toggle;
