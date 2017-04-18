
const React = require('react')

const size = 512

module.exports = ({
  size = 512,
  color = 'white',
  backgroundColor = 'black',
  horizontal,
  children
}) => {
  return (
    <div style={sx.root}>
      <svg
        viewBox='-12 -12 24 24'
        width={size}
        height={size}>
        <rect
          x={-12}
          y={-12}
          width={24}
          height={24}
          fill={color}
        />
        <rect
          x={-4}
          y={-8}
          height={16}
          width={8}
          fill={backgroundColor}
        />
        {children}
      </svg>
    </div>
  )
}

const sx = {
  root: {
    display: 'block',
    margin: 0,
    // overflow: 'visible'
  }
}

