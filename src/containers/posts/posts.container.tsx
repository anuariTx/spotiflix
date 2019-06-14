import React, { useEffect, Suspense, lazy } from 'react';

import { IAppState } from '@rdx/reducers/root.reducer';
import { PostType } from '@shared/types/post.type';

import { connect } from 'react-redux';
import { setPostsAction } from '@rdx/actions/posts.action';

const PostComponent = lazy(() => import('@components/post/post.lazy'));

type PostsProps = {
  fetchPostsAction: Function;
  posts: PostType[];
};

const Posts = ({ posts, fetchPostsAction }: PostsProps) => {
  useEffect(() => {
    fetchPostsAction();
    ///return () => service.cancelRequest('Request canceled at PostsContainer');
  }, [fetchPostsAction]);

  const renderPosts = posts.map(post => {
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
  posts: Object.values(state.posts.posts),
});

const mapDispatchToProps = {
  fetchPostsAction: setPostsAction.request,
};

export const PostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Posts);
