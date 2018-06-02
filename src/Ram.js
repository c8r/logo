const React = require('react')
const Logo = require('./Logo')

module.exports = ({
  size = 896,
  strokeWidth = 0.625
}) => (
  <Logo
    color='white'
    backgroundColor='black'
    size={size}
    horizontal
    radius={1}>
    <path
      fill='none'
      stroke='black'
      strokeWidth={strokeWidth}
      d={path}
    />
  </Logo>
)

const path = [
  'M -4 0',
  'L -2 -2',
  'L 2 2',
  'L 4 0'
].join(' ')
