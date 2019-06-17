import React from 'react';

import { UserType } from '@shared-types/user.type';

import { routerHistory } from '@shared/router.history';

import faker from 'faker';

import './header.styles.css';

type HeaderComponentProps = { user: UserType; signOutAction: Function };

export const HeaderComponent = ({ user, signOutAction }: HeaderComponentProps) => {
  const handleSignOutClick = () => signOutAction({ signOutCleanup: () => routerHistory.push('/') });

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src={faker.image.image()} alt="kyc" />
        </div>
        <div className="header__user">
          <span>{user.name}</span>
          <img src={user.image} alt="kyc" />
          <button onClick={() => handleSignOutClick()}>GTFO</button>
        </div>
      </div>
    </div>
  );
};
