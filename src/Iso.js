const React = require('react')
const Logo = require('./Logo')

module.exports = ({
  size = 896,
  strokeWidth = 0.625
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
      strokeWidth={strokeWidth}
      d={L}
    />
  </Logo>
)

const y = 0
const c = 2.1
const colors = {
  a: '#fff',
  b: '#000'
}

const Y = `
M0 -3 V${y}
M0 ${y} L${[-c, c]}
M0 ${y} L${[c, c]}
`

const V = `
M${[ -c, c ]}
L0 -2
L${[ c, c ]}
`

const l = {
  t: -1.5,
  b: 3,
  r: 5 / 8,
  shift: -1
}
const L = `
M ${[ l.t * l.r, l.t + l.shift ]}
L ${[ l.b * l.r, l.b + l.shift ]}
M0 ${l.shift}
L ${[ -l.b * l.r, l.b + l.shift ]}
`
