const axios = require('axios');
const _ = require('lodash');

const POSMONI_URL = 'https://api.posmoni.com/api/v1/moderations';

const moderations = function (config) {
  function toSnakeCase(options) {
    return [options].map(dataObject => _.transform(dataObject, (resultObject, value, key) => {
      const newKey = _.snakeCase(_.trim(key));
      resultObject[newKey] = value;
    }))[0];
  }

  return {
    get(options) {
      const { projectKey } = config;
      const params = _.omit(toSnakeCase(options));

      const payload = {
        method: 'get',
        url: POSMONI_URL,
        headers: { Authorization: projectKey },
        params,
      };

      return axios.request(payload)
        .then(result => result)
        .catch(error => error);
    },

    create(options) {
      const { projectKey } = config;
      const data = _.omit(toSnakeCase(options));

      const payload = {
        method: 'post',
        url: POSMONI_URL,
        headers: { Authorization: projectKey },
        data,
      };

      return axios.request(payload)
        .then(result => result)
        .catch(error => error);
    },
  };
};

module.exports = moderations;
