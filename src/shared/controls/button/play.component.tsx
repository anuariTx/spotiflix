import React from 'react';

import injectSheet, { ThemeProvider } from 'react-jss';

interface ButtonPlayProps {
  label: string;
  fallback?: Function;
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
    cursor: 'pointer',
  },
});

const ButtonPlay = ({ label, fallback = () => {}, classes }: ButtonPlayProps) => {
  const handleOnClick = () => {
    fallback();
  };

  return (
    <button className={classes['button--play']} onClick={() => handleOnClick()}>
      {label}
    </button>
  );
};

export const ButtonPlayComponent = injectSheet(buttonPlayStyles)(ButtonPlay);
