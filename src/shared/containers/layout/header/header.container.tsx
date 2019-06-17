import React from 'react';

import { connect } from 'react-redux';
import { IAppState } from '@rdx/reducers/root.reducer';
import { UserType } from '@rdx/reducers/auth.reducer';

import { HeaderComponent } from '@shared-components/layout/header/header.component';
import { signOutAction } from '@rdx/actions/auth.action';

type HeaderContainerProps = {
  signOutAction: Function;
  user?: UserType;
};

const Header = ({ user, signOutAction }: HeaderContainerProps) => {
  return (
    <HeaderComponent
      user={
        user || {
          username: 'Slim Shady',
          image: 'https://www.izzi.mx/unity/img/dummy-img/thumbs/myaccount-user-thumb2.png',
        }
      }
      signOutAction={signOutAction}
    />
  );
};

const mapStateToProps = (state: IAppState) => ({
  user: state.auth.user,
});

const mapDispatchToProps = {
  signOutAction: signOutAction.trigger,
};

export const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
