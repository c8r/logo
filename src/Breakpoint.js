
const React = require('react')
const chroma = require('chroma-js')
const Logo = require('./Logo')

const blue = '#00badb'
const color = blue
const bg = chroma(blue).darken(3.5).desaturate(1/2)

module.exports = ({
  size = 1024
}) => {
  return (
    <Logo
      color={color}
      backgroundColor={bg}
      size={size}
      radius={1}
      horizontal>
      <circle r={1} fill={bg} />
    </Logo>
  )
}

