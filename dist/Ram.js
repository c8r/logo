'use strict';

var React = require('react');
var Logo = require('./Logo');

module.exports = function (_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === undefined ? 896 : _ref$size,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === undefined ? 0.625 : _ref$strokeWidth;
  return React.createElement(
    Logo,
    {
      color: 'white',
      backgroundColor: 'black',
      size: size,
      horizontal: true,
      radius: 1 },
    React.createElement('path', {
      fill: 'none',
      stroke: 'black',
      strokeWidth: strokeWidth,
      d: path
    })
  );
};

var path = ['M -4 0', 'L -2 -2', 'L 2 2', 'L 4 0'].join(' ');