import React from 'react';

import { connect } from 'react-redux';
import { IAppState } from '@rdx/reducers/root.reducer';

import { HeaderComponent } from '@shared-components/layout/header/header.component';
import { signOutAction } from '@rdx/actions/auth.action';
import { UserType } from '@shared/types/user.type';

type HeaderContainerProps = {
  signOutAction: Function;
  user?: UserType;
};

const Header = ({ user, signOutAction }: HeaderContainerProps) => {
  return (
    <HeaderComponent
      user={
        user || {
          id: 'abc123',
          name: 'Slim Shady',
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
  signOutAction: signOutAction.request,
};

export const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
