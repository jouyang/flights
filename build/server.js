'use strict';

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var makeServer = function () {
  var _ref = (0, _bluebird.coroutine)(regeneratorRuntime.mark(function _callee() {
    var silent = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
    var app, server;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            app = (0, _express2.default)();


            app.use(_bodyParser2.default.json());
            app.use(_bodyParser2.default.urlencoded({ extended: true }));

            // configure routes with node app
            require('./routes/routes.js')(app);

            server = app.listen(8080, function () {
              if (!silent) {
                console.log('Listening on port %s...', server.address().port);
              }
            });
            return _context.abrupt('return', server);

          case 6:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function makeServer(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = makeServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZXJ2ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs4REFNQTtBQUFBLFFBQTBCLE1BQTFCLHlEQUEyQyxLQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUSxlQURSLEdBQ2Msd0JBRGQ7OztBQUdFLGdCQUFJLEdBQUosQ0FBUSxxQkFBVyxJQUFYLEVBQVI7QUFDQSxnQkFBSSxHQUFKLENBQVEscUJBQVcsVUFBWCxDQUFzQixFQUFDLFVBQVUsSUFBWCxFQUF0QixDQUFSOztBQUVBO0FBQ0Esb0JBQVEsb0JBQVIsRUFBOEIsR0FBOUI7O0FBRUksa0JBVE4sR0FTZSxJQUFJLE1BQUosQ0FBVyxJQUFYLEVBQWlCLFlBQVc7QUFDdkMsa0JBQUksQ0FBQyxNQUFMLEVBQWE7QUFDWCx3QkFBUSxHQUFSLENBQVkseUJBQVosRUFBdUMsT0FBTyxPQUFQLEdBQWlCLElBQXhEO0FBQ0Q7QUFDRixhQUpZLENBVGY7QUFBQSw2Q0FjUyxNQWRUOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7O2tCQUFlLFU7Ozs7O0FBSmY7Ozs7QUFDQTs7Ozs7O0FBb0JBLE9BQU8sT0FBUCxHQUFpQixVQUFqQiIsImZpbGUiOiJzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcbmltcG9ydCBQcm9taXNlIGZyb20gJ2JsdWViaXJkJztcblxuYXN5bmMgZnVuY3Rpb24gbWFrZVNlcnZlcihzaWxlbnQ6Ym9vbGVhbiA9IGZhbHNlKTogUHJvbWlzZTxPYmplY3Q+IHtcbiAgY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG4gIGFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuICBhcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7ZXh0ZW5kZWQ6IHRydWV9KSk7XG5cbiAgLy8gY29uZmlndXJlIHJvdXRlcyB3aXRoIG5vZGUgYXBwXG4gIHJlcXVpcmUoJy4vcm91dGVzL3JvdXRlcy5qcycpKGFwcCk7XG5cbiAgdmFyIHNlcnZlciA9IGFwcC5saXN0ZW4oODA4MCwgZnVuY3Rpb24oKSB7XG4gICAgaWYgKCFzaWxlbnQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdMaXN0ZW5pbmcgb24gcG9ydCAlcy4uLicsIHNlcnZlci5hZGRyZXNzKCkucG9ydCk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHNlcnZlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYWtlU2VydmVyO1xuIl19