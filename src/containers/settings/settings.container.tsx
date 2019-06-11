import React from 'react';

import { connect } from 'react-redux';
import { IAppState } from '@rdx/reducers/root.reducer';
import { changeThemeAction } from '@rdx/actions/theme.action';

type SettingsProps = {
  changeThemeAction: Function;
};

const Settings = ({ changeThemeAction }: SettingsProps) => {
  const handleChangeTheme = (theme: string) => changeThemeAction(theme);

  return (
    <div>
      <button onClick={() => handleChangeTheme('lighTheme')}>Light Theme</button>
      <button onClick={() => handleChangeTheme('darkTheme')}>Dark Theme</button>
    </div>
  );
};

const mapStateToProps = (state: IAppState) => ({});

export const SettingsContainer = connect(
  mapStateToProps,
  { changeThemeAction },
)(Settings);
