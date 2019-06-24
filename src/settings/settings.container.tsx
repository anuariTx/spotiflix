import React from 'react';

import { connect } from 'react-redux';
import { AppStateInterface } from '@rdx/root.reducer';
import { changeThemeAction } from '@shared/themes/theme.action';

type SettingsProps = {
  changeThemeAction: Function;
};

const Settings = ({ changeThemeAction }: SettingsProps) => {
  const handleChangeTheme = (theme: string) => changeThemeAction(theme);

  return (
    <div>
      <button onClick={() => handleChangeTheme('lightTheme')}>Light Theme</button>
      <button onClick={() => handleChangeTheme('darkTheme')}>Dark Theme</button>
      <button onClick={() => handleChangeTheme('prideTheme')}>Pride Theme</button>
      <button onClick={() => handleChangeTheme('itexicoTheme')}>iTexico Theme</button>
    </div>
  );
};

const mapStateToProps = (state: AppStateInterface) => ({});
const mapDispatchToProps = { changeThemeAction: changeThemeAction.trigger };

export const SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
