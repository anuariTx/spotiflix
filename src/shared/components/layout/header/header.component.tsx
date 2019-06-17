import React from 'react';

import { UserType } from '@shared-types/user.type';

import { routerHistory } from '@shared/router.history';

import faker from 'faker';
import injectSheet from 'react-jss';

import './header.styles.css';

type HeaderComponentProps = { user: UserType; signOutAction: Function; classes: any };

const styles = (theme: any) => ({
  header: {
    background: theme.mainBackground,
  },
  text: {
    color: theme.mainText,
  },
});

const Header = ({ user, signOutAction, classes }: HeaderComponentProps) => {
  const handleSignOutClick = () => signOutAction({ signOutCleanup: () => routerHistory.push('/') });

  return (
    <div className={`${classes.header}`}>
      <div className="header__container">
        <div className="header__logo">
          <img src={faker.image.image()} alt="kyc" />
        </div>
        <div className="header__user">
          <span className={classes.text}>{user.name}</span>
          <img src={user.image} alt="kyc" />
          <button onClick={() => handleSignOutClick()}>GTFO</button>
        </div>
      </div>
    </div>
  );
};

export const HeaderComponent = injectSheet(styles)(Header);
