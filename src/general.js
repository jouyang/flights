// @flow

import config from './config';
import path from 'path';

const APP_ROOT = path.resolve(__dirname) + '/..';

// logging code
function info(message: mixed): void {
  if (config.logging) {
    if (typeof(message) === 'object') {
      console.log(JSON.stringify(message, null, 2));
    } else {
      console.log('[INFO] ' + message);
    }
  }
}

function error(message: mixed, error: ?Error): void {
  if (config.logging) {
    if (typeof(message) === 'object') {
      console.log(JSON.stringify(message, null, 2));
    } else {
      console.log('[ERROR] ' + message);
    }

    error && console.log(error);
  }
}

module.exports = {
  APP_ROOT,
  info,
  error,
};
