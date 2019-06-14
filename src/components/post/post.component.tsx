import React from 'react';

import { Post } from '@rdx/reducers/posts.reducer';

import LazyLoad from 'react-lazyload';

type PostComponentProps = {
  post: Post;
};

export const PostComponent = ({ post }: PostComponentProps) => (
  <LazyLoad>
    <li>{post.title}</li>
  </LazyLoad>
);
