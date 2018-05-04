const React = require('react')

module.exports = ({
  size = 1024,
  color = 'black',
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='-6 -12 12 24'
    fill={color}
    style={{
      display: 'block',
      margin: 0
    }}
    width={size}
    height={size}>
    <rect
      x={-6}
      y={-12}
      width={12}
      height={24}
    />
  </svg>
)
