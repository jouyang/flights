'use strict';

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _general = require('../general');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appRouter = function appRouter(app) {
  // load home page
  app.get('/', function (req, res) {
    res.sendFile('index.html', { root: _general.APP_ROOT + '/public' });
  });
  // serve static content for home page
  app.get('/*', function (req, res) {
    res.sendFile(req.url, { root: _general.APP_ROOT + '/public' });
  });

  // error handling
  app.use(function (err, req, res, next) {
    if (res.headersSent) {
      return next(err);
    }

    res.status(500).send(err.message);
  });
};

module.exports = appRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvcm91dGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7OztBQUVBLElBQU0sWUFBWSxTQUFaLFNBQVksQ0FBQyxHQUFELEVBQVM7QUFDekI7QUFDQSxNQUFJLEdBQUosQ0FBUSxHQUFSLEVBQWEsVUFBQyxHQUFELEVBQU0sR0FBTixFQUFjO0FBQ3pCLFFBQUksUUFBSixDQUFhLFlBQWIsRUFBMkIsRUFBQyxNQUFNLG9CQUFXLFNBQWxCLEVBQTNCO0FBQ0QsR0FGRDtBQUdBO0FBQ0EsTUFBSSxHQUFKLENBQVEsSUFBUixFQUFjLFVBQUMsR0FBRCxFQUFNLEdBQU4sRUFBYztBQUMxQixRQUFJLFFBQUosQ0FBYSxJQUFJLEdBQWpCLEVBQXNCLEVBQUMsTUFBTSxvQkFBVyxTQUFsQixFQUF0QjtBQUNELEdBRkQ7O0FBSUE7QUFDQSxNQUFJLEdBQUosQ0FBUSxVQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixJQUFoQixFQUF5QjtBQUMvQixRQUFJLElBQUksV0FBUixFQUFxQjtBQUNuQixhQUFPLEtBQUssR0FBTCxDQUFQO0FBQ0Q7O0FBRUQsUUFBSSxNQUFKLENBQVcsR0FBWCxFQUFnQixJQUFoQixDQUFxQixJQUFJLE9BQXpCO0FBQ0QsR0FORDtBQU9ELENBbEJEOztBQW9CQSxPQUFPLE9BQVAsR0FBaUIsU0FBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHtBUFBfUk9PVH0gZnJvbSAnLi4vZ2VuZXJhbCc7XG5cbmNvbnN0IGFwcFJvdXRlciA9IChhcHApID0+IHtcbiAgLy8gbG9hZCBob21lIHBhZ2VcbiAgYXBwLmdldCgnLycsIChyZXEsIHJlcykgPT4ge1xuICAgIHJlcy5zZW5kRmlsZSgnaW5kZXguaHRtbCcsIHtyb290OiBBUFBfUk9PVCArICcvcHVibGljJ30pO1xuICB9KTtcbiAgLy8gc2VydmUgc3RhdGljIGNvbnRlbnQgZm9yIGhvbWUgcGFnZVxuICBhcHAuZ2V0KCcvKicsIChyZXEsIHJlcykgPT4ge1xuICAgIHJlcy5zZW5kRmlsZShyZXEudXJsLCB7cm9vdDogQVBQX1JPT1QgKyAnL3B1YmxpYyd9KTtcbiAgfSk7XG5cbiAgLy8gZXJyb3IgaGFuZGxpbmdcbiAgYXBwLnVzZSgoZXJyLCByZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIGlmIChyZXMuaGVhZGVyc1NlbnQpIHtcbiAgICAgIHJldHVybiBuZXh0KGVycik7XG4gICAgfVxuXG4gICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoZXJyLm1lc3NhZ2UpO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYXBwUm91dGVyO1xuIl19