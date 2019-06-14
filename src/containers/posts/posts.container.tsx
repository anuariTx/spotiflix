import React, { useEffect, Suspense, lazy } from 'react';

import { IAppState } from '@rdx/reducers/root.reducer';
import { IPosts } from '@interfaces/post.interface';
import { PostType } from '@shared/types/post.type';

import { connect } from 'react-redux';
import { setPostsAction } from '@rdx/actions/posts.action';
import { clearErrorAction } from '@rdx/actions/error.action';

const PostComponent = lazy(() => import('@components/post/post.lazy'));

type PostsProps = {
  posts: IPosts;
  fetchPostsAction: Function;
  cancelPostsAction: Function;
};

const Posts = ({ posts, fetchPostsAction, cancelPostsAction }: PostsProps) => {
  useEffect(() => {
    fetchPostsAction();
    clearErrorAction('sectionPostsContainer');

    return () => cancelPostsAction('Canceled fetch posts');
  }, [fetchPostsAction, cancelPostsAction]);

  const items = Object.values(posts);

  const renderPosts = items.map((post: PostType) => {
    return (
      <Suspense fallback={<li>Loading post....</li>} key={post.id}>
        <PostComponent post={post} />
      </Suspense>
    );
  });

  return (
    <div>
      <ul>{renderPosts}</ul>
    </div>
  );
};

const mapStateToProps = (state: IAppState) => ({
  posts: state.posts.items,
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
