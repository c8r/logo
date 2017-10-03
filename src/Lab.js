const React = require('react')
const Logo = require('./Logo')
const Atom = require('./Atom')

module.exports = ({
  size = 896
}) => (
  <Logo
    color={colors.a}
    backgroundColor={colors.b}
    size={size}
    horizontal
    radius={1}>
    <g transform='translate(-4 -4)'>
      <Atom
        size={8}
        color={colors.c}
        static
      />
    </g>
  </Logo>
)

const w = 1.5
const h = 3
const strokeWidth = 1/4
const colors = {
  a: '#fff',
  _b: '#000',
  b: 'rgba(0, 0, 0, .875)',
  c: '#000',
}
