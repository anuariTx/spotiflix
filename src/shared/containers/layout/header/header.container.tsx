import React from 'react';

import { connect } from 'react-redux';
import { IAppState } from '@rdx/reducers/root.reducer';
import { HeaderComponent } from '@shared-components/layout/header/header.component';

type HeaderContainerProps = { userName?: string };

const Header = (props: HeaderContainerProps) => {
  return <HeaderComponent userName={props.userName || 'Slim Shady'} />;
};

const mapStateToProps = (state: IAppState) => ({
  userName: state.auth.userName,
});

export const HeaderContainer = connect(mapStateToProps)(Header);
