'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var React = require('react');

var _require = require('./polygon'),
    points = _require.points;

var _points = _slicedToArray(points, 6),
    a = _points[0],
    b = _points[1],
    c = _points[2],
    d = _points[3],
    e = _points[4],
    f = _points[5];

var path = ['M', a.x, a.y, 'L', b.x, b.y, 'L', c.x, c.y, 'L', d.x, d.y, 'L', e.x, e.y, 'L', f.x, f.y, 'z'].join(' ');

module.exports = function (_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === undefined ? 512 : _ref$size;
  return React.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '-12 -12 24 24',
      width: size,
      height: size,
      fill: 'currentcolor'
    },
    React.createElement('path', { d: path })
  );
};