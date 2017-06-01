const React = require('react')
const palx = require('palx')
const Logo = require('./Logo')

const palette = palx('#07c')

module.exports = ({
  size = 896
}) => (
  <Logo
    color={colors.a}
    backgroundColor={colors.b}
    size={size}
    horizontal
    radius={1}>
    <g
      fill='none'
      stroke={colors.c}
      strokeWidth={strokeWidth}
      style={{
        opacity: 3/4,
        mixBlendMode: 'multiply'
      }}>
      <ellipse
        cx={0}
        cy={0}
        rx={w}
        ry={h}
      />
      <ellipse
        transform='rotate(-60)'
        cx={0}
        cy={0}
        rx={w}
        ry={h}
      />
      <ellipse
        transform='rotate(60)'
        cx={0}
        cy={0}
        rx={w}
        ry={h}
      />
    </g>
  </Logo>
)

const w = 1.25
const h = 3
const strokeWidth = 1/4
const base = palette.cyan
const colors = {
  a: base[4],
  b: '#111',
  c: '#111'
}
