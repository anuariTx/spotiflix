import React from 'react';

import { RenderReturn } from '@shared/types/render.type';

interface IAppErrorBoundaryState {
  hasError: boolean;
  error: object | null;
}

export class AppErrorBoundary extends React.Component {
  state: IAppErrorBoundaryState = {
    hasError: false,
    error: null,
  };

  static getDerivedStateFromError(error: object) {
    return { hasError: true, error };
  }

  render(): RenderReturn {
    return this.state.hasError ? <div>Something went wrong</div> : this.props.children;
  }
}
