'use strict';

var React = require('react');
var Logo = require('./Logo');

module.exports = function (_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === undefined ? 1024 : _ref$size;

  return React.createElement(
    'svg',
    {
      viewBox: '-32 -32 64 64',
      style: sx.root,
      width: size,
      height: size },
    React.createElement('rect', {
      x: -32,
      y: -32,
      width: 64,
      height: 64,
      fill: '#fff' }),
    React.createElement(
      'g',
      { transform: 'scale(1.5)' },
      React.createElement(
        'g',
        { transform: 'translate(-12 -12)' },
        React.createElement(Logo, {
          size: 24,
          color: '#777',
          backgroundColor: '#f6f6f6'
        })
      ),
      React.createElement(
        'g',
        { fill: 'none',
          stroke: gray,
          strokeWidth: 1 / 8 },
        React.createElement('path', { d: d(M, -4, -13, L, -4, -14, L, 4, -14, L, 4, -13) }),
        React.createElement('path', { d: d(M, 13, -12, L, 14, -12, L, 14, 12, L, 13, 12) }),
        React.createElement('path', { d: d(M, 15, -8, L, 16, -8, L, 16, 8, L, 15, 8) }),
        React.createElement('path', { d: d(M, 15, -12, L, 16, -12, L, 16, -8, L, 15, -8) })
      ),
      React.createElement(
        'g',
        { fill: gray },
        React.createElement(
          'text',
          { y: '-15', textAnchor: 'middle' },
          'x'
        ),
        React.createElement(
          'text',
          { x: 17 },
          '2x'
        ),
        React.createElement(
          'text',
          { x: 17, y: -9.5 },
          '0.5x'
        ),
        React.createElement(
          'text',
          { x: 14.5, y: 12 },
          '3x'
        )
      )
    )
  );
};

var M = 'M';
var L = 'L';
var d = function d() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.join(' ');
};

var sx = {
  root: {
    display: 'block',
    margin: 0,
    fontFamily: '"SF UI Display"',
    fontSize: 1.5
  }
};

var gray = '#777';
var red = '#f04';