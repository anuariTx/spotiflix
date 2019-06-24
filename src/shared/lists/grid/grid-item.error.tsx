import React from 'react';

import injectSheet from 'react-jss';

import './grid-item.styles.css';

interface GridItemErrorInterface {
  classes: { gridItemError: string };
}

const styles = (theme: any) => ({
  gridItemError: {
    background: theme.mainBackground,
    color: theme.mainText,
  },
});

export const GridItemError = ({ classes }: GridItemErrorInterface) => (
  <div className="grid-item--error">
    <div className="grid-item--error__icon">
      <i className="far fa-sad-tear fa-7x" />
    </div>
    <div className={`grid-item--error__message ${classes.gridItemError}`}>
      Error loading this item.
    </div>
  </div>
);

export const GridItemErrorComponent = injectSheet(styles)(GridItemError);
