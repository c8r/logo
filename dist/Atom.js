'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');

var sx = {
  svg: {
    display: 'block',
    maxWidth: '100%',
    margin: 0,
    fill: 'none'
  },
  electronA: {
    transformOrigin: '0 0',
    animationName: 'spinA',
    animationDuration: '3s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite'
  },
  electronB: {
    transformOrigin: '0 0',
    animationName: 'spinB',
    animationDuration: '3s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite'
  },
  staticA: {
    animation: 'none',
    transform: 'rotate3d(0, 1, 1, 100deg)'
  },
  staticB: {
    animation: 'none',
    transform: 'rotate3d(1, 0, 1, 100deg)'
  }
};

var keyframes = '\n/* <![CDATA[ */\n@keyframes spinA {\n  50% { transform: rotate3d(0, 1, 1, 180deg) }\n  100% { transform: rotate3d(0, 1, 1, 360deg) }\n}\n@keyframes spinB {\n  50% { transform: rotate3d(1, 0, 1, 180deg) }\n  100% { transform: rotate3d(1, 0, 1, 360deg) }\n}\n/* ]]> */\n';

var Atom = function Atom(props) {
  var electronProps = {
    cx: 0,
    cy: 0,
    r: 11,
    strokeWidth: 4,
    vectorEffect: 'non-scaling-stroke'
  };
  var size = props.size || 256;

  return React.createElement(
    'svg',
    {
      viewBox: '-12 -12 24 24',
      size: props.size,
      width: size,
      height: size,
      stroke: props.color || 'currentcolor',
      style: sx.svg },
    React.createElement('style', { dangerouslySetInnerHTML: { __html: keyframes } }),
    React.createElement(
      'g',
      { transform: 'rotate(5 0 0)' },
      React.createElement('circle', _extends({}, electronProps, {
        style: Object.assign({}, sx.electronA, props.static ? sx.staticA : {})
      })),
      React.createElement('circle', _extends({}, electronProps, {
        style: Object.assign({}, sx.electronB, props.static ? sx.staticB : {})
      }))
    )
  );
};

module.exports = Atom;