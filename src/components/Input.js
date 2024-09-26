import React from 'react';
import './Input.css';

const Input = ({ placeholder, type = 'text' }) => {
  return <input className="input" type={type} placeholder={placeholder} />;
};

export default Input;
