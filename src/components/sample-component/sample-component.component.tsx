import React from 'react';

type SampleComponentProps = {
  message: string;
};

export const SampleComponent = ({ message }: SampleComponentProps) => <div>{message}</div>;
