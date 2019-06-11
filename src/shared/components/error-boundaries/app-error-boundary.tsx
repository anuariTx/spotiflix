import React from 'react';

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

  render():
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | string
    | number
    | {}
    | React.ReactNodeArray
    | React.ReactPortal
    | boolean
    | null
    | undefined {
    return this.state.hasError ? <div>Something went wrong</div> : this.props.children;
  }
}
