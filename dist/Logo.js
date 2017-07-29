'use strict';

var React = require('react');

module.exports = function (_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === undefined ? 1024 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === undefined ? 'black' : _ref$color,
      _ref$backgroundColor = _ref.backgroundColor,
      backgroundColor = _ref$backgroundColor === undefined ? 'white' : _ref$backgroundColor,
      radius = _ref.radius,
      horizontal = _ref.horizontal,
      children = _ref.children,
      _ref$_dimensions = _ref._dimensions,
      _dimensions = _ref$_dimensions === undefined ? [16, 8] : _ref$_dimensions;

  var H = horizontal ? 0 : 1;
  var w = _dimensions[H];
  var h = _dimensions[1 - H];
  var x = -w / 2;
  var y = -h / 2;

  return React.createElement(
    'svg',
    {
      viewBox: '-12 -12 24 24',
      style: sx.root,
      width: size,
      height: size },
    React.createElement('rect', {
      x: -12,
      y: -12,
      width: 24,
      height: 24,
      fill: backgroundColor,
      rx: radius,
      ry: radius
    }),
    React.createElement('rect', {
      x: x,
      y: y,
      width: w,
      height: h,
      fill: color
    }),
    children
  );
};

var sx = {
  root: {
    display: 'block',
    margin: 0
  }
};