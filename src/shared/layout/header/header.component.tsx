import React from 'react';

import { UserType } from '@shared-types/user.type';

import { routerHistory } from '../../router.history';

import injectSheet from 'react-jss';

import './header.styles.css';

type HeaderComponentProps = { user: UserType; signOutAction: Function; classes: any };

const styles = (theme: any) => ({
  header: {
    background: theme.mainBackground,
    color: theme.mainText,
  },
});

export const Header = ({ user, signOutAction, classes }: HeaderComponentProps) => {
  const handleSignOutClick = () => signOutAction({ signOutCleanup: () => routerHistory.push('/') });

  return (
    <div className={`${classes.header}`}>
      <div className="header__container">
        <div className="header__logo">
          <img
            src="http://www.norrislakemarinas.org/wp-content/themes/norris/img/logo_placeholder.png"
            alt="logo"
          />
        </div>
        <div className="header__user">
          <span>{user.name}</span>
          <img src={user.image} alt="user" />
          <button onClick={() => handleSignOutClick()}>GTFO</button>
        </div>
      </div>
    </div>
  );
};

export const HeaderComponent = injectSheet(styles)(Header);
