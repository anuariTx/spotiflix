import React from 'react';

import { ErrorBoundaryHOC } from '@hoc/error-boundary.hoc';
import { PostsContainer } from '@containers/posts/posts.container';

export const SectionContainer = () => (
  <ErrorBoundaryHOC
    fallback={<div>Something went wrong</div>}
    containerName="SectionPostsContainer"
  >
    <PostsContainer />
  </ErrorBoundaryHOC>
);
