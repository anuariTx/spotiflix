import React from 'react';

type LazyContainerProps = {
  fetchFunction: Function;
  componentImportPath: string;
};

export const LazyContainerHOC = ({ fetchFunction, componentImportPath }: LazyContainerProps) => {
  return React.lazy(() => {
    return fetchFunction().then(({ data }: any) => {



      return import(componentImportPath)
    });
  });
};
