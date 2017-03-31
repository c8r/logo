
const React = require('react')

module.exports = () => {
  return (
    <g fill='none'
      vectorEffect='non-scaling-stroke'
      stroke={colors.red}
      strokeWidth={.125}>
      <path d='M -12 -12 H 12' />
      <path d='M -12 -8 H 12' />
      <path d='M -12 -4 H 12' />
      <path d='M -12 0 H 12' />
      <path d='M -12 4 H 12' />
      <path d='M -12 8 H 12' />
      <path d='M -12 12 H 12' />
      <path d='M -12 -12 V 12' />
      <path d='M -8 -12 V 12' />
      <path d='M -4 -12 V 12' />
      <path d='M 0 -12 V 12' />
      <path d='M 4 -12 V 12' />
      <path d='M 8 -12 V 12' />
      <path d='M 12 -12 V 12' />
    </g>
  )
}

const colors = {
  red: 'rgba(255, 0, 0, .25)'
}
