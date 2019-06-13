import React from 'react';

import { connect } from 'react-redux';
import { IAppState } from '@rdx/reducers/root.reducer';
import { UserType } from '@rdx/reducers/auth.reducer';

import { HeaderComponent } from '@shared-components/layout/header/header.component';

type HeaderContainerProps = {
  user?: UserType;
};

const Header = (props: HeaderContainerProps) => {
  return <HeaderComponent username={props.user ? props.user.username : 'Slim Shady'} />;
};

const mapStateToProps = (state: IAppState) => ({
  userName: state.auth.user,
});

export const HeaderContainer = connect(mapStateToProps)(Header);
