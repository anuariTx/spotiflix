export interface LocationInterface {
  key: string;
  pathname: string;
  search: string;
  hash: string;
  state: LocationStateInterface;
}

export interface LocationStateInterface {
  referrer: {
    pathname: string;
  };
}
