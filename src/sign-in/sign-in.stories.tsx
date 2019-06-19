import React from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';

import { SignInControlsComponent } from './sign-in-controls.component';

const signInProps = {
  isSignedIn: false,
  signInAction: linkTo('Header', 'Sign In'),
  location: {
    key: '',
    pathname: '',
    search: '',
    hash: '',
    state: {
      referrer: {
        pathname: '',
      },
    },
  },
};

storiesOf('Login', module).add('Sign In', () => <SignInControlsComponent {...signInProps} />);
