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
    <path
      fill='none'
      stroke='black'
      strokeWidth={1}
      d={`
        M0 -3 V${y}
        M0 ${y} L${[-c, c]}
        M0 ${y} L${[c, c]}
      `}
    />
  </Logo>
)
// <g transform='translate(-4 -4)'></g>

const y = 0
const c = 2.2
const colors = {
  a: '#fff',
  b: '#000'
}
