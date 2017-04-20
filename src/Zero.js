
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
        <g fill='none'
          stroke='black'
          strokeWidth={strokeWidth}>
          <path d={paths.x} />
          <path d={paths.o} />
        </g>
    </Logo>
  )
}

const strokeWidth = 1/2
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
    M, 3, -2,
    A, 2, 2, 0, 0, 0, 3, 2,
    A, 2, 2, 0, 0, 0, 3, -2,

    M, 4.5, -1.5,
    L, 1.5, 1.5,

  ].join(' ')
}

