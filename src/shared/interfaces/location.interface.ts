export interface ILocation {
  key: string;
  pathname: string;
  search: string;
  hash: string;
  state: ILocationState;
}

export interface ILocationState {
  referrer: {
    pathname: string;
  };
}
