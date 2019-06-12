import React, { Suspense } from 'react';

import { LazyContainer } from '@containers/lazy-container/lazy-container.container';
import { ErrorBoundaryHOC } from '@hoc/error-boundary.hoc';

const timeout = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const fakeRequest = async () => {
  await timeout(1500);
  const luck = Math.floor(Math.random() * 10) >= 4;
  if (!luck) {
    throw new Error('Error on fake request');
  }
  return { data: 'Hello! Fake request completed.' };
};

export const SectionContainer = () => (
  <ErrorBoundaryHOC fallback={<div>Something went wrong</div>}>
    <Suspense fallback={<h3>Loading...</h3>}>
      <LazyContainer />
    </Suspense>
  </ErrorBoundaryHOC>
);
