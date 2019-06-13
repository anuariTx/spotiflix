import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { fetchDataAction } from '@rdx/actions/fetch-data.action';

import { ErrorBoundaryHOC } from '@hoc/error-boundary.hoc';

type SectionContainerProps = {
  fetchDataAction: Function;
};

const Sample = ({ fetchDataAction }: SectionContainerProps) => {
  useEffect(() => {
    fetchDataAction();
  }, [fetchDataAction]);

  return (
    <ErrorBoundaryHOC
      fallback={<div>Something went wrong</div>}
      containerName="SectionSampleContainer"
    >
      <div />
    </ErrorBoundaryHOC>
  );
};

export const SampleContainer = connect(
  null,
  { fetchDataAction },
)(Sample);
