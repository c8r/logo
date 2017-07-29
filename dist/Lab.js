'use strict';

var React = require('react');
var palx = require('palx');
var Logo = require('./Logo');

var palette = palx('#07c');

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
      {
        fill: 'none',
        stroke: colors.c,
        strokeWidth: strokeWidth,
        style: {
          opacity: 3 / 4,
          mixBlendMode: 'multiply'
        } },
      React.createElement('ellipse', {
        cx: 0,
        cy: 0,
        rx: w,
        ry: h
      }),
      React.createElement('ellipse', {
        transform: 'rotate(-60)',
        cx: 0,
        cy: 0,
        rx: w,
        ry: h
      }),
      React.createElement('ellipse', {
        transform: 'rotate(60)',
        cx: 0,
        cy: 0,
        rx: w,
        ry: h
      })
    )
  );
};

var w = 1.25;
var h = 3;
var strokeWidth = 1 / 4;
var base = palette.cyan;
var colors = {
  a: base[4],
  b: '#111',
  c: '#111'
};