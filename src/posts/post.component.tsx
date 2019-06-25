import React from 'react';

import { PostType } from './post.type';

import LazyLoad from 'react-lazyload';

import './post.styles.css';

type PostComponentProps = {
  post: PostType;
};

export const PostComponent = ({ post }: PostComponentProps) => (
  <LazyLoad>
    <li>
      <div className="post">
        <h4 className="post__title">{post.title}</h4>
        <p className="post__body">{post.body}</p>
      </div>
    </li>
  </LazyLoad>
);
