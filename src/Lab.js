const React = require('react')
const Logo = require('./Logo')

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
        opacity: 1, // 3/4,
        mixBlendMode: 'multiply'
      }}>
      <ellipse
        transform='rotate(-45)'
        cx={0}
        cy={0}
        rx={w}
        ry={h}
      />
      <ellipse
        transform='rotate(45)'
        cx={0}
        cy={0}
        rx={w}
        ry={h}
      />
    </g>
  </Logo>
)

const w = 1.5
const h = 3
const strokeWidth = 1/4
const colors = {
  a: '#fff',
  b: '#000',
  c: '#000'
}
