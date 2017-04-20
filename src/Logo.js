
const React = require('react')

module.exports = ({
  size = 1024,
  color = 'black',
  backgroundColor = 'white',
  radius,
  horizontal,
  children,
  _dimensions = [ 16, 8 ]
}) => {
  const H = horizontal ? 0 : 1
  const w = _dimensions[H]
  const h = _dimensions[1 - H]
  const x = -w / 2
  const y = -h / 2

  console.log(size)

  return (
    <svg
      viewBox='-12 -12 24 24'
      style={sx.root}
      width={size}
      height={size}>
      <rect
        x={-12}
        y={-12}
        width={24}
        height={24}
        fill={backgroundColor}
        rx={radius}
        ry={radius}
      />
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        fill={color}
      />
      {children}
    </svg>
  )
}

const sx = {
  root: {
    display: 'block',
    margin: 0
  }
}

