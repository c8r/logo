'use strict';

var React = require('react');
var Logo = require('./Logo');
var Atom = require('./Atom');

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
    React.createElement(
      'g',
      { transform: 'rotate(45)' },
      React.createElement('ellipse', {
        cx: 0,
        cy: 0,
        rx: 1.75,
        ry: 3.5,
        fill: 'none',
        stroke: 'currentcolor',
        strokeWidth: strokeWidth
      }),
      React.createElement('ellipse', {
        cx: 0,
        cy: 0,
        rx: 3.5,
        ry: 1.75,
        fill: 'none',
        stroke: 'currentcolor',
        strokeWidth: strokeWidth
      })
    )
  );
};

/*
  <g transform='translate(-4 -4)'>
    <Atom
      size={8}
      color={colors.b}
      static
    />
  </g>
  */

var colors = {
  a: '#fff',
  b: '#000'
};