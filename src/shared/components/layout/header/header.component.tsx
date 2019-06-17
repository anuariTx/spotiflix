import React from 'react';
import faker from 'faker';

import './header.styles.css';

type HeaderComponentProps = { user: any | undefined; signOutAction: Function };

export const HeaderComponent = ({ user, signOutAction }: HeaderComponentProps) => {
  const handleSignOut = () => signOutAction();

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src={faker.image.image()} alt="kyc" />
        </div>
        <div className="header__user">
          <span>{user.username}</span>
          <img src={user.image} alt="kyc" />
          <button onClick={() => handleSignOut()}>GTFO</button>
        </div>
      </div>
    </div>
  );
};
