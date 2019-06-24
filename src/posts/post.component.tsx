import React from 'react';

import { PostType } from './post.type';

import LazyLoad from 'react-lazyload';

import Skeleton from 'react-skeleton-loader';
import './post.styles.css';

type PostComponentProps = {
  post: PostType;
};

export const PostComponent = ({ post }: PostComponentProps) => (
  <LazyLoad>
    <li>
      <div className="post">
        <h4 className="post__title">{post.title || <Skeleton />}</h4>
        <p className="post__body">{post.body || <Skeleton width="100%" count={4} />}</p>
      </div>
    </li>
  </LazyLoad>
);
