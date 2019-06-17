import React from 'react';

import { ErrorBoundaryHOC } from 'error/error-boundary.hoc';
import { PostsContainer } from 'posts/posts.container';

const SECTION_POSTS_CONTAINER = 'SECTION_POSTS_CONTAINER';

export const SectionContainer = () => (
  <ErrorBoundaryHOC
    fallback={<div>Something went wrong</div>}
    containerName={SECTION_POSTS_CONTAINER}
  >
    <PostsContainer containerName={SECTION_POSTS_CONTAINER} />
  </ErrorBoundaryHOC>
);
