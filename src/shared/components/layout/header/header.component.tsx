import React from 'react';

type HeaderComponentProps = { username: string | undefined };

export const HeaderComponent = ({ username }: HeaderComponentProps) => {
  return (
    <div>
      <p>Hi, I'm a header.</p>
      <p>My name is {username}</p>
    </div>
  );
};
