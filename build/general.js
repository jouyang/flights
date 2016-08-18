'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var APP_ROOT = _path2.default.resolve(__dirname) + '/..';

// logging code
function info(message) {
  if (_config2.default.logging) {
    if ((typeof message === 'undefined' ? 'undefined' : _typeof(message)) === 'object') {
      console.log(JSON.stringify(message, null, 2));
    } else {
      console.log('[INFO] ' + message);
    }
  }
}

function error(message, error) {
  if (_config2.default.logging) {
    if ((typeof message === 'undefined' ? 'undefined' : _typeof(message)) === 'object') {
      console.log(JSON.stringify(message, null, 2));
    } else {
      console.log('[ERROR] ' + message);
    }

    error && console.log(error);
  }
}

module.exports = {
  APP_ROOT: APP_ROOT,
  info: info,
  error: error
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9nZW5lcmFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNLFdBQVcsZUFBSyxPQUFMLENBQWEsU0FBYixJQUEwQixLQUEzQzs7QUFFQTtBQUNBLFNBQVMsSUFBVCxDQUFjLE9BQWQsRUFBb0M7QUFDbEMsTUFBSSxpQkFBTyxPQUFYLEVBQW9CO0FBQ2xCLFFBQUksUUFBTyxPQUFQLHlDQUFPLE9BQVAsT0FBb0IsUUFBeEIsRUFBa0M7QUFDaEMsY0FBUSxHQUFSLENBQVksS0FBSyxTQUFMLENBQWUsT0FBZixFQUF3QixJQUF4QixFQUE4QixDQUE5QixDQUFaO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsY0FBUSxHQUFSLENBQVksWUFBWSxPQUF4QjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxTQUFTLEtBQVQsQ0FBZSxPQUFmLEVBQStCLEtBQS9CLEVBQW9EO0FBQ2xELE1BQUksaUJBQU8sT0FBWCxFQUFvQjtBQUNsQixRQUFJLFFBQU8sT0FBUCx5Q0FBTyxPQUFQLE9BQW9CLFFBQXhCLEVBQWtDO0FBQ2hDLGNBQVEsR0FBUixDQUFZLEtBQUssU0FBTCxDQUFlLE9BQWYsRUFBd0IsSUFBeEIsRUFBOEIsQ0FBOUIsQ0FBWjtBQUNELEtBRkQsTUFFTztBQUNMLGNBQVEsR0FBUixDQUFZLGFBQWEsT0FBekI7QUFDRDs7QUFFRCxhQUFTLFFBQVEsR0FBUixDQUFZLEtBQVosQ0FBVDtBQUNEO0FBQ0Y7O0FBRUQsT0FBTyxPQUFQLEdBQWlCO0FBQ2Ysb0JBRGU7QUFFZixZQUZlO0FBR2Y7QUFIZSxDQUFqQiIsImZpbGUiOiJnZW5lcmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuY29uc3QgQVBQX1JPT1QgPSBwYXRoLnJlc29sdmUoX19kaXJuYW1lKSArICcvLi4nO1xuXG4vLyBsb2dnaW5nIGNvZGVcbmZ1bmN0aW9uIGluZm8obWVzc2FnZTogbWl4ZWQpOiB2b2lkIHtcbiAgaWYgKGNvbmZpZy5sb2dnaW5nKSB7XG4gICAgaWYgKHR5cGVvZihtZXNzYWdlKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UsIG51bGwsIDIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ1tJTkZPXSAnICsgbWVzc2FnZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGVycm9yKG1lc3NhZ2U6IG1peGVkLCBlcnJvcjogP0Vycm9yKTogdm9pZCB7XG4gIGlmIChjb25maWcubG9nZ2luZykge1xuICAgIGlmICh0eXBlb2YobWVzc2FnZSkgPT09ICdvYmplY3QnKSB7XG4gICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShtZXNzYWdlLCBudWxsLCAyKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdbRVJST1JdICcgKyBtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBlcnJvciAmJiBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEFQUF9ST09ULFxuICBpbmZvLFxuICBlcnJvcixcbn07XG4iXX0=