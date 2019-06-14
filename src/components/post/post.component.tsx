import React from 'react';

import { PostType } from '@shared/types/post.type';

import LazyLoad from 'react-lazyload';

type PostComponentProps = {
  post: PostType;
};

export const PostComponent = ({ post }: PostComponentProps) => (
  <LazyLoad>
    <li>{post.title}</li>
  </LazyLoad>
);
