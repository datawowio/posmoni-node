const Moderations = require('./resources/Moderations');

module.exports = function (config) {
  return {
    moderations: Moderations(config),
  };
};
