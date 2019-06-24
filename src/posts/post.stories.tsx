import React from 'react';
import { storiesOf } from '@storybook/react';
import { PostType } from './post.type';

import { PostComponent } from './post.component';

export const post: PostType = {
  id: '1',
  title: 'Test Task',
  body: 'jeje',
};

export const emptyPost: PostType = {
  id: '',
  title: '',
  body: '',
};

storiesOf('Posts', module)
  .add('Loaded', () => <PostComponent post={post} />)
  .add('Loading', () => <PostComponent post={emptyPost} />);
