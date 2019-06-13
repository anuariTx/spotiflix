import React, { useEffect } from 'react';

import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { fetchDataAction } from '@rdx/actions/fetch-data.action';

import { ErrorBoundaryHOC } from '@hoc/error-boundary.hoc';

type SectionContainerProps = {
  fetchDataAction: Function;
};

const Sample = (props: SectionContainerProps) => {
  useEffect(() => {
    props.fetchDataAction();
  }, [props]);

  return (
    <ErrorBoundaryHOC
      fallback={<div>Something went wrong</div>}
      containerName="SectionSampleContainer"
    >
      <div />
    </ErrorBoundaryHOC>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(fetchDataAction, dispatch);

export const SampleContainer = connect(
  null,
  mapDispatchToProps,
)(Sample);
