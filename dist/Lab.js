'use strict';

var React = require('react');
var Logo = require('./Logo');
var Atom = require('./Atom');

module.exports = function (_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === undefined ? 896 : _ref$size;
  return React.createElement(
    Logo,
    {
      color: colors.a,
      backgroundColor: colors.b,
      size: size,
      horizontal: true,
      radius: 1 },
    React.createElement(
      'g',
      { transform: 'translate(-4 -4)' },
      React.createElement(Atom, {
        size: 8,
        color: colors.c,
        'static': true
      })
    )
  );
};

var w = 1.5;
var h = 3;
var strokeWidth = 1 / 4;
var colors = {
  a: '#fff',
  _b: '#000',
  b: 'rgba(0, 0, 0, .875)',
  c: '#000'
};