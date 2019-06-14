import React from 'react';

export type RenderReturn =
  | React.ReactElement<any, string | React.JSXElementConstructor<any>>
  | string
  | number
  | {}
  | React.ReactNodeArray
  | React.ReactPortal
  | boolean
  | null
  | undefined;
