import React from 'react';

import injectSheet from 'react-jss';

import './item.styles.css';

interface ItemErrorInterface {
  classes: { itemError: string };
}

const styles = (theme: any) => ({
  itemError: {
    background: theme.mainBackground,
    color: theme.mainText,
  },
});

export const ItemError = ({ classes }: ItemErrorInterface) => (
  <div className="item--error">
    <div className="item--error__icon">
      <i className="far fa-sad-tear fa-7x" />
    </div>
    <div className={`item--error__message ${classes.itemError}`}>
      Error loading this item.
    </div>
  </div>
);

export const ItemErrorComponent = injectSheet(styles)(ItemError);
