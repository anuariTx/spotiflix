import axios, { AxiosRequestConfig, CancelTokenSource, CancelTokenStatic, Method } from 'axios';

import _ from 'lodash';

import { BASE_URL, BEARER_KEY, HEADERS, getAuthorizationHeader } from './axios.config';

interface IRequestParams {
  endpoint: string;
  headers?: object;
  body?: object;
  method?: Method;
}
type Request = (params: IRequestParams) => Promise<any>;

export class AxiosService {
  private readonly baseURL: string;
  private readonly bearerKey: string;
  private headers: object;
  private cancelGlobal: CancelTokenStatic;
  private source: CancelTokenSource;

  constructor(baseURL: string = BASE_URL, bearerKey: string = BEARER_KEY) {
    this.baseURL = baseURL;
    this.bearerKey = bearerKey;
    this.headers = HEADERS;
    this.cancelGlobal = axios.CancelToken;
    this.source = this.cancelGlobal.source();
  }

  get: Request = reqParams => {
    return this.request({
      ...reqParams,
      method: 'get',
    });
  };

  post: Request = reqParams => {
    return this.request({
      ...reqParams,
      method: 'post',
    });
  };

  put: Request = reqParams => {
    return this.request({
      ...reqParams,
      method: 'put',
    });
  };

  patch: Request = reqParams => {
    return this.request({
      ...reqParams,
      method: 'patch',
    });
  };

  delete: Request = reqParams => {
    return this.request({
      ...reqParams,
      method: 'delete',
    });
  };

  cancelRequest(msg: string): void {
    this.source.cancel(msg);
  }

  request: Request = ({ endpoint, headers = {}, body = {}, method }) => {
    this.headers = { ...getAuthorizationHeader(this.bearerKey), ...this.headers };

    const requestSetup: AxiosRequestConfig = {
      method,
      baseURL: this.baseURL,
      headers: this.headers,
      data: body,
      cancelToken: this.source.token,
    };

    if (!_.isEmpty(headers)) {
      requestSetup.headers = { ...requestSetup.headers, ...headers };
    }

    return new Promise((resolve, reject) =>
      axios(endpoint, requestSetup)
        .then(response => {
          if (response.status === 200) {
            return resolve(response);
          }
          return reject(response);
        })
        .catch(error => {
          if (axios.isCancel(error)) {
            return reject(error);
          }
          return reject(error);
        }),
    );
  };
}
