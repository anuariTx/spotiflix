import React from 'react';

const timeout = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const fakeRequest = async () => {
  await timeout(1500);
  const luck = Math.floor(Math.random() * 10) >= 4;
  if (!luck) {
    throw new Error('Error on fake request');
  }
  return { data: 'Hello! Fake request completed.' };
};

const LazyContainer = React.lazy(() => {
  return import('');
});
