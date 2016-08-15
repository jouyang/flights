// @flow

// NOTE: Make sure to sync with db/config/config.json
const env = process.env.NODE_ENV || 'development';

const baseConfig = {
  'logging': true,
  'test': false,
};

const config = {
  'development': {
    ...baseConfig,
  },
  'production': {
    ...baseConfig,
  },
};

module.exports = function() {
  return config[env];
}();
