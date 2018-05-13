"use strict";

var rad = function rad(a) {
  return Math.PI * a / 180;
};
var round = function round(n) {
  return Math.round(n * 1000) / 1000;
};
var rx = function rx(r, a) {
  return round(r * Math.cos(rad(a)));
};
var ry = function ry(r, a) {
  return round(r * Math.sin(rad(a)));
};
var num = function num(n) {
  return n < 0.0000001 ? 0 : n;
};

var offset = 90;
var getPoints = function getPoints(_ref) {
  var _ref$radius = _ref.radius,
      radius = _ref$radius === undefined ? 11 : _ref$radius,
      _ref$length = _ref.length,
      length = _ref$length === undefined ? 6 : _ref$length;
  return Array.from({ length: length }).map(function (n, i) {
    var a = 360 / length * i - offset;
    var x = rx(radius, a);
    var y = ry(radius, a);
    return { x: x, y: y };
  });
};

var points = getPoints({});
module.exports.getPoints = getPoints;
module.exports.points = points;