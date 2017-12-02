const React = require('react')
const Logo = require('./Logo')
const Atom = require('./Atom')

module.exports = ({
  size = 896,
  strokeWidth = 0.5
}) => (
  <Logo
    color={colors.a}
    backgroundColor={colors.b}
    size={size}
    horizontal
    radius={1}>
    <g transform='rotate(45)'>
      <ellipse
        cx={0}
        cy={0}
        rx={1.75}
        ry={3.5}
        fill='none'
        stroke='currentcolor'
        strokeWidth={strokeWidth}
      />
      <ellipse
        cx={0}
        cy={0}
        rx={3.5}
        ry={1.75}
        fill='none'
        stroke='currentcolor'
        strokeWidth={strokeWidth}
      />
    </g>
  </Logo>
)

const colors = {
  a: '#fff',
  b: '#000'
}
