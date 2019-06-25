import React from 'react';

import { AppStateInterface } from '@rdx/root.reducer';
import { ErrorStateInterface } from 'error/error.reducer';
import { RenderReturn } from '@shared/types/render.type';

import { connect } from 'react-redux';

type ErrorBoundaryProps = {
  children: RenderReturn;
  fallback: RenderReturn;
  containerName: string;
  errors: ErrorStateInterface;
};

type ErrorBoundaryState = {};

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state = {
    hasError: false,
  };

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    if (this.props.errors[this.props.containerName] !== undefined) {
      this.setState({ hasError: true });
    }
  }

  render(): RenderReturn {
    const { children, fallback } = this.props;

    if (this.state.hasError) {
      return fallback;
    }

    return children;
  }
}

const mapStateToProps = (state: AppStateInterface) => ({
  errors: state.error,
});

export const ErrorBoundaryHOC = connect(mapStateToProps)(ErrorBoundary);
