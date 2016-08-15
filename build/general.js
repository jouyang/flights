'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// at playGo root directory
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9nZW5lcmFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7QUFFQTtBQUNBLElBQU0sV0FBVyxlQUFLLE9BQUwsQ0FBYSxTQUFiLElBQTBCLEtBQTNDOztBQUVBO0FBQ0EsU0FBUyxJQUFULENBQWMsT0FBZCxFQUFvQztBQUNsQyxNQUFJLGlCQUFPLE9BQVgsRUFBb0I7QUFDbEIsUUFBSSxRQUFPLE9BQVAseUNBQU8sT0FBUCxPQUFvQixRQUF4QixFQUFrQztBQUNoQyxjQUFRLEdBQVIsQ0FBWSxLQUFLLFNBQUwsQ0FBZSxPQUFmLEVBQXdCLElBQXhCLEVBQThCLENBQTlCLENBQVo7QUFDRCxLQUZELE1BRU87QUFDTCxjQUFRLEdBQVIsQ0FBWSxZQUFZLE9BQXhCO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFNBQVMsS0FBVCxDQUFlLE9BQWYsRUFBK0IsS0FBL0IsRUFBb0Q7QUFDbEQsTUFBSSxpQkFBTyxPQUFYLEVBQW9CO0FBQ2xCLFFBQUksUUFBTyxPQUFQLHlDQUFPLE9BQVAsT0FBb0IsUUFBeEIsRUFBa0M7QUFDaEMsY0FBUSxHQUFSLENBQVksS0FBSyxTQUFMLENBQWUsT0FBZixFQUF3QixJQUF4QixFQUE4QixDQUE5QixDQUFaO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsY0FBUSxHQUFSLENBQVksYUFBYSxPQUF6QjtBQUNEOztBQUVELGFBQVMsUUFBUSxHQUFSLENBQVksS0FBWixDQUFUO0FBQ0Q7QUFDRjs7QUFFRCxPQUFPLE9BQVAsR0FBaUI7QUFDZixvQkFEZTtBQUVmLFlBRmU7QUFHZjtBQUhlLENBQWpCIiwiZmlsZSI6ImdlbmVyYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG4vLyBhdCBwbGF5R28gcm9vdCBkaXJlY3RvcnlcbmNvbnN0IEFQUF9ST09UID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSkgKyAnLy4uJztcblxuLy8gbG9nZ2luZyBjb2RlXG5mdW5jdGlvbiBpbmZvKG1lc3NhZ2U6IG1peGVkKTogdm9pZCB7XG4gIGlmIChjb25maWcubG9nZ2luZykge1xuICAgIGlmICh0eXBlb2YobWVzc2FnZSkgPT09ICdvYmplY3QnKSB7XG4gICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShtZXNzYWdlLCBudWxsLCAyKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdbSU5GT10gJyArIG1lc3NhZ2UpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBlcnJvcihtZXNzYWdlOiBtaXhlZCwgZXJyb3I6ID9FcnJvcik6IHZvaWQge1xuICBpZiAoY29uZmlnLmxvZ2dpbmcpIHtcbiAgICBpZiAodHlwZW9mKG1lc3NhZ2UpID09PSAnb2JqZWN0Jykge1xuICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkobWVzc2FnZSwgbnVsbCwgMikpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnW0VSUk9SXSAnICsgbWVzc2FnZSk7XG4gICAgfVxuXG4gICAgZXJyb3IgJiYgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBBUFBfUk9PVCxcbiAgaW5mbyxcbiAgZXJyb3IsXG59O1xuIl19