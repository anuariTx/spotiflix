import React from 'react';

import { RenderReturn } from '@shared/types/render.type';

import { connect } from 'react-redux';
import { setErrorAction } from '@rdx/actions/error.action';

type ErrorBoundaryProps = {
  children: RenderReturn;
  fallback: RenderReturn;
  setErrorAction: Function;
};

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
};

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state = {
    hasError: false,
    error: null,
  };

  static getDerivedStateFromError(error: Error): object {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    setErrorAction({ error });
  }

  render(): RenderReturn {
    const { children, fallback } = this.props;

    if (this.state.hasError) {
      return fallback;
    }

    return children;
  }
}

export const ErrorBoundaryHOC = connect(
  null,
  { setErrorAction },
)(ErrorBoundary);
