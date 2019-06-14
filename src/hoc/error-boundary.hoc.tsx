import React from 'react';

import { RenderReturn } from '@shared/types/render.type';

import { connect } from 'react-redux';
import { IAppState } from '@rdx/reducers/root.reducer';
import { IErrorState } from '@rdx/reducers/error.reducer';

type ErrorBoundaryProps = {
  children: RenderReturn;
  fallback: RenderReturn;
  containerName: string;
  errors: IErrorState;
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

const mapStateToProps = (state: IAppState) => ({
  errors: state.error,
});

export const ErrorBoundaryHOC = connect(mapStateToProps)(ErrorBoundary);
