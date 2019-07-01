import React from 'react';

type ErrorBoundaryProps = {
  children: JSX.Element;
  fallback: JSX.Element;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundaryHOC extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  render(): JSX.Element {
    const { children, fallback } = this.props;

    if (this.state.hasError) {
      return fallback;
    }

    return children;
  }
}
