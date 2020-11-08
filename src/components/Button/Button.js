import React from 'react';

const Button = (props) => {
  const { children, styleClass, onClick, disabled } = props;
  return (
    <button
      className={`button ${styleClass}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
};

export default Button;