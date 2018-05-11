const React = require('react')

const radius = 11
const rad = a => Math.PI * a / 180
const round = n => Math.round(n * 1000) / 1000
const rx = (r, a) => round(r * Math.cos(rad(a)))
const ry = (r, a) => round(r * Math.sin(rad(a)))
const num = n => (n < 0.0000001) ? 0 : n

const offset = 90
const getPoints = length => Array.from({ length })
  .map((n, i) => {
    const a = 360 / length * i - offset
    const x = rx(radius, a)
    const y = ry(radius, a)
    return { x, y }
  })

const points = getPoints(6)

const [ a, b, c, d, e, f ] = points
/*    a
 *  f   b
 *  e   c
 *    d
*/

const D = [
  'M', a.x, a.y,
  'L', b.x, b.y,
  'L', e.x, e.y,
  'L', f.x, f.y,
  'L', a.x, a.y,
  'z',
  'M', f.x, f.y,
  'L', c.x, c.y,
  'L', d.x, d.y,
  'L', e.x, e.y
].join(' ')

module.exports = ({
  size = 512,
  strokeWidth = 1
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='-12 -12 24 24'
    width={size}
    height={size}
    fill='none'
    strokeWidth={strokeWidth}
    stroke='currentcolor'
    strokeLinejoin='round'
  >
    <path d={D} />
  </svg>
)
