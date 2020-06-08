const axios = require('axios');
const _ = require('lodash');

const POSMONI_URL = 'https://api.posmoni.com/api/v1/moderations';

const self = module.exports = {
  toSnakeCase(options) {
    return [options].map(dataObject => _.transform(dataObject, (resultObject, value, key) => {
      const newKey = _.snakeCase(_.trim(key));
      resultObject[newKey] = value;
    }))[0];
  },

  get(options) {
    const { token } = options;
    const params = _.omit(self.toSnakeCase(options));

    const payload = {
      method: 'get',
      url: POSMONI_URL,
      headers: { Authorization: token },
      params,
    };

    return axios.request(payload)
      .then(result => result)
      .catch(error => error);
  },

  create(options) {
    const { token } = options;
    const data = _.omit(self.toSnakeCase(options));

    const payload = {
      method: 'post',
      url: POSMONI_URL,
      headers: { Authorization: token },
      data,
    };

    return axios.request(payload)
      .then(result => result)
      .catch(error => error);
  },
};
