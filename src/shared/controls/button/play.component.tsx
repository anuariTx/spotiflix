import React from 'react';

import injectSheet, { ThemeProvider } from 'react-jss';
interface ButtonPlayProps {
  label: string;
  fallback?: Function;
  renderIcon?: JSX.Element;
  classes?: any;
}

const buttonPlayStyles = (theme: ThemeProvider) => ({
  'button--play': {
    minWidth: '100px',
    background: '#05c46b',
    color: '#fff',
    padding: '10px 0',
    border: 'none',
    borderRadius: '30px',
    transition: 'all .3s ease',
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(1.15)',
    },
  },
  btn__icon: { color: '#fff', marginRight: 10 },
});

const ButtonPlay = ({ label, renderIcon, classes, fallback = () => {} }: ButtonPlayProps) => {
  const handleOnClick = () => {
    fallback();
  };

  return (
    <button className={classes['button--play']} onClick={() => handleOnClick()}>
      {renderIcon && <span className={classes.btn__icon}>{renderIcon}</span>}
      {label}
    </button>
  );
};

export const ButtonPlayComponent = injectSheet(buttonPlayStyles)(ButtonPlay);
