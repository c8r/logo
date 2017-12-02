'use strict';

var React = require('react');
var Logo = require('./Logo');

module.exports = function (_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === undefined ? 896 : _ref$size,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === undefined ? 0.5 : _ref$strokeWidth;
  return React.createElement(
    Logo,
    {
      color: colors.a,
      backgroundColor: colors.b,
      size: size,
      horizontal: true,
      radius: 1 },
    React.createElement('path', {
      fill: 'none',
      stroke: 'black',
      strokeWidth: strokeWidth,
      d: '\n        M0 -3 V' + y + '\n        M0 ' + y + ' L' + [-c, c] + '\n        M0 ' + y + ' L' + [c, c] + '\n      '
    })
  );
};

var y = 0;
var c = 2.1;
var colors = {
  a: '#fff',
  b: '#000'
};