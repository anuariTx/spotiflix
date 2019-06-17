import React from 'react';

import { ErrorBoundaryHOC } from '@hoc/error-boundary.hoc';
import { PostsContainer } from '@containers/posts/posts.container';

const SECTION_POSTS_CONTAINER = 'SECTION_POSTS_CONTAINER';

export const SectionContainer = () => (
  <ErrorBoundaryHOC
    fallback={<div>Something went wrong</div>}
    containerName={SECTION_POSTS_CONTAINER}
  >
    <PostsContainer containerName={SECTION_POSTS_CONTAINER} />
  </ErrorBoundaryHOC>
);
