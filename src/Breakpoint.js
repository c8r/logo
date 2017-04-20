
const React = require('react')
const Logo = require('./Logo')

module.exports = ({
  size = 1024
}) => {
  return (
    <Logo
      color='white'
      backgroundColor='black'
      size={size}
      radius={1}
      horizontal>
      <circle r={1} fill='black' />
    </Logo>
  )
}

