import React, { useEffect, Suspense, lazy } from 'react';

import { AppStateInterface } from '@rdx/root.reducer';
import { IPosts } from './post.interface';
import { PostType } from './post.type';

import { connect } from 'react-redux';
import { clearErrorAction } from '@error/error.action';
import { setPostsAction } from './posts.action';

import './post.styles.css';

const PostComponent = lazy(() => import('./post.lazy'));

type PostsProps = {
  containerName: string;
  isLoadingData: boolean;
  hasError: boolean;
  postsUnmounted: boolean;
  posts: IPosts;
  clearErrorAction: Function;
  fetchPostsAction: Function;
  cancelPostsAction: Function;
};

const Posts = ({
  containerName,
  isLoadingData,
  hasError,
  postsUnmounted,
  posts,
  clearErrorAction,
  fetchPostsAction,
  cancelPostsAction,
}: PostsProps) => {
  useEffect(() => {
    clearErrorAction(containerName);
    fetchPostsAction(containerName);

    return () => cancelPostsAction('Canceled fetch posts');
  }, [containerName, clearErrorAction, fetchPostsAction, cancelPostsAction]);

  useEffect(() => {
    if (!isLoadingData && hasError && !postsUnmounted) {
      throw new Error('Error when fetching posts');
    }
  }, [isLoadingData, hasError, postsUnmounted]);

  const items = Object.values(posts);

  const renderPosts = items.map((post: PostType) => {
    return (
      <Suspense fallback={<div>Loading...</div>} key={post.id}>
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
  isLoadingData: state.posts.isLoadingData,
  hasError: state.posts.hasError,
  postsUnmounted: state.posts.postsUnmounted,
  posts: state.posts.items,
});

const mapDispatchToProps = {
  clearErrorAction: clearErrorAction.trigger,
  fetchPostsAction: setPostsAction.request,
  cancelPostsAction: setPostsAction.fulfill,
};

export const PostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Posts);
