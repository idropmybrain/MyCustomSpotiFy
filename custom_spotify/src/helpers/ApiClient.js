/* eslint-disable */

import superagent from 'superagent';
const methods = ['get', 'post', 'put', 'patch', 'del'];
const HOSTNAME = 'https://api.spotify.com/v1';

function formatUrl(path) {
  let apiPath = path;
  let apiPathArray = [];

  if (apiPath.indexOf('?') != -1) {
    apiPathArray = apiPath.split('?');
    apiPath = apiPathArray[0];
    apiPathArray.shift();
  }

  // const adjustedPath = HOSTNAME + (apiPathArray.length != 0 ? `?${apiPathArray.join('')}` : '');
  const adjustedPath = HOSTNAME + apiPath + (apiPathArray.length != 0 ? `?${apiPathArray.join('')}` : '');
  return adjustedPath;
}

export default class ApiClient {
  constructor(req) {
    methods.forEach(method => {
      this[method] = (path, { params, data, headers = {}, files, fields } = {}) => new Promise((resolve, reject) => {
        headers['Accept'] = "application/json";
        let request = superagent[method](formatUrl(path))
          .set(headers);
        if (path.indexOf('fakeapi') !== -1) {
          let fakePath = path;
          let splitPathArray = fakePath.split('/');
          splitPathArray.shift();
          let constructedURL = splitPathArray.join('/');
          request = superagent[method](`${HOSTNAME}/${constructedURL}`);
        }
        if (params) {
          request.query(params);
        }

        if (headers) {
          request.set(headers);
        }

        if (true) {
          request.set('Authorization', `Bearer BQAo7yQtJXcM_Y-nTfaEme5ADfdg6aB7DjmLjarpWNzIxY_g5Qiumu_jjBKJ-a3iF4lFMksWoBZXNPfVk7JRVwHaT6Oo0VUEEXNz4PJLqqXWZ-UIpHbKHNjxMEhiwcidEcOgqIXc8pPVnYIQyw5nhr84HRkSvWW_3_vkFJWGM4APTBDhAOhSsOXmBLOYNAVvW9ILUrxLeMDeuR4QtDUShP-nSqjG8QuNLMaioQjC1C5vvKaJpa05nF9Nr4yEgPtVoF1MBPO2XPLrWShBXad82Khgk8XySKnqQ9k6kQ`);
        }

        if (files) {
          request.send(files);
        }

        if (fields) {
          fields.forEach(item => request.field(item.key, item.value));
        }

        if (data) {
          headers['Content-Type'] = "application/json";
          request.set(headers);
          request.send(data);
        }

        request.end((err, response = {}) => {
          if (err) {
            reject(response.body || err);
          } else {
            if (response.text != '') {
              resolve(JSON.parse(response.text));
            } else {
              resolve();
            }
          }
        });
      });
    });
  }
}
