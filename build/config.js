'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// NOTE: Make sure to sync with db/config/config.json
var env = process.env.NODE_ENV || 'development';

var baseConfig = {
  'logging': true,
  'test': false
};

var config = {
  'development': _extends({}, baseConfig),
  'production': _extends({}, baseConfig)
};

module.exports = function () {
  return config[env];
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25maWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBO0FBQ0EsSUFBTSxNQUFNLFFBQVEsR0FBUixDQUFZLFFBQVosSUFBd0IsYUFBcEM7O0FBRUEsSUFBTSxhQUFhO0FBQ2pCLGFBQVcsSUFETTtBQUVqQixVQUFRO0FBRlMsQ0FBbkI7O0FBS0EsSUFBTSxTQUFTO0FBQ2IsOEJBQ0ssVUFETCxDQURhO0FBSWIsNkJBQ0ssVUFETDtBQUphLENBQWY7O0FBU0EsT0FBTyxPQUFQLEdBQWlCLFlBQVc7QUFDMUIsU0FBTyxPQUFPLEdBQVAsQ0FBUDtBQUNELENBRmdCLEVBQWpCIiwiZmlsZSI6ImNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbi8vIE5PVEU6IE1ha2Ugc3VyZSB0byBzeW5jIHdpdGggZGIvY29uZmlnL2NvbmZpZy5qc29uXG5jb25zdCBlbnYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnO1xuXG5jb25zdCBiYXNlQ29uZmlnID0ge1xuICAnbG9nZ2luZyc6IHRydWUsXG4gICd0ZXN0JzogZmFsc2UsXG59O1xuXG5jb25zdCBjb25maWcgPSB7XG4gICdkZXZlbG9wbWVudCc6IHtcbiAgICAuLi5iYXNlQ29uZmlnLFxuICB9LFxuICAncHJvZHVjdGlvbic6IHtcbiAgICAuLi5iYXNlQ29uZmlnLFxuICB9LFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGNvbmZpZ1tlbnZdO1xufSgpO1xuIl19