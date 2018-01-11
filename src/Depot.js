const React = require('react')
const Logo = require('./Logo')

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
      <rect x={-3} y={-1} width={1} height={2} fill='black' />
      <rect x={-1} y={-1} width={1} height={2} fill='black' />
      <rect x={1} y={-1} width={1} height={2} fill='black' />
  </Logo>
)

const colors = {
  a: '#fff',
  b: '#000'
}
