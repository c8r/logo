
const React = require('react')
const Logo = require('./Logo')

module.exports = ({
  size = 512
}) => {
  return (
    <svg
      viewBox='-32 -32 64 64'
      style={sx.root}
      width={size}
      height={size}>
      <rect
        x={-32}
        y={-32}
        width={64}
        height={64}
        fill='#fff' />
      <g transform='scale(1.5)'>
        <g transform='translate(-12 -12)'>
          <Logo
            size={24}
            color='#777'
            backgroundColor='#f6f6f6'
          />
        </g>
        <g fill='none'
          stroke={gray}
          strokeWidth={1/8}>
          <path d={d(
            M, -4, -13,
            L, -4, -14,
            L, 4, -14,
            L, 4, -13
          )} />
          <path d={d(
            M, 13, -12,
            L, 14, -12,
            L, 14, 12,
            L, 13, 12
          )} />
          <path d={d(
            M, 15, -8,
            L, 16, -8,
            L, 16, 8,
            L, 15, 8
          )} />
          <path d={d(
            M, 15, -12,
            L, 16, -12,
            L, 16, -8,
            L, 15, -8
          )} />
        </g>
        <g fill={gray}
          textAnchor='middle'>
          <text y='-15'>x</text>
          <text x={18}>2x</text>
          <text x={18} y={-10}>½x</text>
          <text x={15.5} y={12}>3x</text>
        </g>
      </g>
    </svg>
  )
}

const M = 'M'
const L = 'L'
const d = (...args) => args.join(' ')

const sx = {
  root: {
    display: 'block',
    margin: 0,
    fontFamily: 'monospace',
    fontSize: 1.5
  }
}

const gray = '#777'
const red = '#f04'

