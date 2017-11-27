'use strict';

var React = require('react');
var Logo = require('./Logo');

module.exports = function (_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === undefined ? 896 : _ref$size;

  return React.createElement(
    Logo,
    {
      color: 'white',
      backgroundColor: 'black',
      size: size,
      radius: 1,
      horizontal: true },
    React.createElement(
      'g',
      { fill: 'none',
        stroke: 'black',
        strokeWidth: strokeWidth },
      React.createElement('path', { d: paths.o })
    )
  );
};

var strokeWidth = 0.75; // 1/2
var M = 'M';
var L = 'L';
var A = 'A';

var paths = {
  x: [M, -4.8, -1.8, L, -1.2, 1.8, M, -1.2, -1.8, L, -4.8, 1.8].join(' '),
  o: [M, 0, -3, A, 3, 3, 0, 0, 0, 0, 3, A, 3, 3, 0, 0, 0, 0, -3, M, 3, -3, L, -3, 3].join(' ')
};