const React = require('react')
const { points } = require('./polygon')

const [ a, b, c, d, e, f ] = points

const path = [
  'M', a.x, a.y,
  'L', b.x, b.y,
  'L', c.x, c.y,
  'L', d.x, d.y,
  'L', e.x, e.y,
  'L', f.x, f.y,
  'z'
].join(' ')

module.exports = ({
  size = 512
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='-12 -12 24 24'
    width={size}
    height={size}
    fill='currentcolor'
  >
    <path d={path} />
  </svg>
)
