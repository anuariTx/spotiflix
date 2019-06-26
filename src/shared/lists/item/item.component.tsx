import React, { Fragment } from 'react';

import { SubtitleLinkInterface } from '@interfaces/subtitle-link.interface';

import { Link } from 'react-router-dom';

import LazyLoad from 'react-lazyload';
import injectSheet from 'react-jss';
import { formatLinkPath } from '../../utils/formatLinkPath';

import './item.styles.css';

interface ItemPropsInterface {
  title: string;
  subtitle?: string | SubtitleLinkInterface[];
  imageURL: string;
  isRound: boolean;
  classes: { item: string; item__link: string };
}

const styles = (theme: any) => ({
  item: {
    background: theme.mainBackground,
    color: theme.mainText,
  },
  item__link: {
    color: theme.mainText,
    textDecoration: 'none',
  },
});

const isSubtitleLinkArray = (subtitle: any): subtitle is SubtitleLinkInterface[] => {
  return Array.isArray(subtitle) && subtitle[0].id !== undefined;
};

export const Item = ({ title, subtitle, imageURL, isRound, classes }: ItemPropsInterface) => {
  const renderSubtitle = () => {
    if (!subtitle) {
      return;
    }

    let itemSub;
    if (isSubtitleLinkArray(subtitle)) {
      itemSub = subtitle.map((artist, index) => (
        <Fragment>
          <Link
            className={`item__subtitle__link ${classes.item__link}`}
            to={`artist/${formatLinkPath(artist.name)}`}
          >
            {artist.name}
          </Link>
          {index < subtitle.length - 1 && ', '}
        </Fragment>
      ));
    } else {
      itemSub = subtitle;
    }

    return <div className="item__subtitle">{itemSub}</div>;
  };

  return (
    <LazyLoad>
      <div className={`item ${classes.item}`}>
        <img
          className={`item__image ${isRound && 'item__image--round'}`}
          src={imageURL}
          alt={title}
        />
        <div className="item__title">{title}</div>
        {renderSubtitle()}
      </div>
    </LazyLoad>
  );
};

Item.defaultProps = {
  subtitle: '',
  imageURL: 'https://via.placeholder.com/200',
  isRound: false,
};

export const ItemComponent = injectSheet(styles)(Item);
