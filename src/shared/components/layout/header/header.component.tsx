import React from 'react';

type HeaderComponentProps = { userName: string };

export const HeaderComponent = ({ userName }: HeaderComponentProps) => {
  return (
    <div>
      <p>Hi, I'm a header.</p>
      <p>My name is {userName}</p>
    </div>
  );
};
