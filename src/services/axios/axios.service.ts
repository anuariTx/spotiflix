import axios from 'axios';
import _ from 'lodash';
import { BASE_URL, HEADERS, getAuthorizationHeader } from './backendConfig';

class backendAPI {
  constructor() {
    this.baseURL = BASE_URL;
    this.headers = HEADERS;
    this.cancelGlobal = axios.CancelToken;
    this.source = this.cancelGlobal.source();
  }

  get(endpoint, headers = {}) {
    return this.request({
      url: endpoint,
      method: 'get',
      headers,
    });
  }

  post(endpoint, body = {}, headers = {}) {
    return this.request({
      url: endpoint,
      method: 'post',
      body,
      headers,
    });
  }

  put(endpoint, body = {}, headers = {}) {
    return this.request({
      url: endpoint,
      method: 'put',
      body,
      headers,
    });
  }

  patch(endpoint, body = {}, headers = {}) {
    return this.request({
      url: endpoint,
      method: 'patch',
      body,
      headers,
    });
  }

  delete(endpoint, body = {}, headers = {}) {
    return this.request({
      url: endpoint,
      method: 'delete',
      body,
      headers,
    });
  }

  cancelRequest(msg) {
    this.source.cancel(msg);
  }

  request({ url, method, body = {}, headers = {} }) {
    this.headers = { ...getAuthorizationHeader(), ...this.headers };

    const requestSetup = {
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
      axios(url, requestSetup)
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
  }
}

export default backendAPI;
