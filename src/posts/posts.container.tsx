import React, { useEffect, Suspense, lazy } from 'react';

import { AppStateInterface } from '@rdx/root.reducer';
import { IPosts } from 'posts/post.interface';
import { PostType } from '@posts/post.type';

import { connect } from 'react-redux';
import { setPostsAction } from 'posts/posts.action';
import { clearErrorAction } from 'error/error.action';
import { ErrorStateInterface } from 'error/error.reducer';

import './post.styles.css';

const PostComponent = lazy(() => import('posts/post.lazy'));

type PostsProps = {
  posts: IPosts;
  containerName: string;
  errors: ErrorStateInterface;
  fetchPostsAction: Function;
  cancelPostsAction: Function;
};

const Posts = ({
  posts,
  containerName,
  errors,
  fetchPostsAction,
  cancelPostsAction,
}: PostsProps) => {
  useEffect(() => {
    clearErrorAction(containerName);
    fetchPostsAction(containerName);

    return () => cancelPostsAction('Canceled fetch posts');
  }, [containerName, fetchPostsAction, cancelPostsAction]);

  if (errors[containerName] !== undefined) {
    throw new Error();
  }

  const items = Object.values(posts);

  const renderPosts = items.map((post: PostType) => {
    return (
      <Suspense fallback={<div></div>} key={post.id}>
        <PostComponent post={post} />
      </Suspense>
    );
  });

  return (
    <div className="container">
      <ul className="post__list">{renderPosts}</ul>
    </div>
  );
};

const mapStateToProps = (state: AppStateInterface) => ({
  posts: state.posts.items,
  errors: state.error,
});

const mapDispatchToProps = {
  fetchPostsAction: setPostsAction.request,
  cancelPostsAction: setPostsAction.fulfill,
  clearErrorAction: clearErrorAction.fulfill,
};

export const PostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Posts);
