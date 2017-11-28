const React = require('react')
const Logo = require('./Logo')

module.exports = ({
  size = 896
}) => {
  return (
    <Logo
      color='white'
      backgroundColor='black'
      size={size}
      radius={1}
      horizontal>
        <g fill='none'
          stroke='black'
          strokeWidth={strokeWidth}>
          <path d={paths.o} />
        </g>
    </Logo>
  )
}

const strokeWidth = 0.75 // 1/2
const M = 'M'
const L = 'L'
const A = 'A'

const paths = {
  x: [
    M, -4.8, -1.8,
    L, -1.2, 1.8,
    M, -1.2, -1.8,
    L, -4.8, 1.8
  ].join(' '),
  o: [
    M, 0, -3,
    A, 3, 3, 0, 0, 0, 0, 3,
    A, 3, 3, 0, 0, 0, 0, -3,

    M, 3, -3,
    L, -3, 3,

  ].join(' ')
}

