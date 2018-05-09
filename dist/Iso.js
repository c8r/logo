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
      color: colors.a,
      backgroundColor: colors.b,
      size: size,
      horizontal: true,
      radius: 1 },
    React.createElement('path', {
      fill: 'none',
      stroke: 'black',
      strokeWidth: strokeWidth,
      d: L
    })
  );
};

var y = 0;
var c = 2.1;
var colors = {
  a: '#fff',
  b: '#000'
};

var Y = '\nM0 -3 V' + y + '\nM0 ' + y + ' L' + [-c, c] + '\nM0 ' + y + ' L' + [c, c] + '\n';

var V = '\nM' + [-c, c] + '\nL0 -2\nL' + [c, c] + '\n';

var l = {
  t: -1.5,
  b: 3,
  r: 5 / 8,
  shift: -1
};
var L = '\nM ' + [l.t * l.r, l.t + l.shift] + '\nL ' + [l.b * l.r, l.b + l.shift] + '\nM0 ' + l.shift + '\nL ' + [-l.b * l.r, l.b + l.shift] + '\n';