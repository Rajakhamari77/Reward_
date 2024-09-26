import React from 'react';
import './Button.css';

const Button = ({ text, color }) => {
  return <button className={`button ${color}`}>{text}</button>;
};

export default Button;
