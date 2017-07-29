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
    React.createElement('circle', { r: 1, fill: 'black' })
  );
};