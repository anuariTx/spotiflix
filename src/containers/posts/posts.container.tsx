import React, { useEffect, Suspense, lazy } from 'react';

import { IAppState } from '@rdx/reducers/root.reducer';
import { Post } from '@rdx/reducers/posts.reducer';

import { connect } from 'react-redux';
import { setPostsAction } from '@rdx/actions/posts.action';

import { AxiosService } from '@services/axios/axios.service';

const PostComponent = lazy(() => import('@components/post/post.lazy'));

type PostsProps = {
  setPostsAction: Function;
  posts: Post[];
};

const Posts = ({ posts, setPostsAction }: PostsProps) => {
  useEffect(() => {
    const service = new AxiosService('https://jsonplaceholder.typicode.com/');

    service.get({ endpoint: 'posts' }).then(({ data }) => {
      let payload = {};
      data.slice(0, 10).forEach((post: Post) => {
        payload = { ...payload, [post.id]: { id: post.id, title: post.title } };
      });
      setPostsAction(payload);
    });

    return () => service.cancelRequest('Request canceled at PostsContainer');
  }, [setPostsAction]);

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
  posts: Object.values(state.posts),
});

export const PostsContainer = connect(
  mapStateToProps,
  { setPostsAction },
)(Posts);
