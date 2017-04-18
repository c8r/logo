
const React = require('react')
const Grid = require('./Grid')

const size = 512
const x = 16
const x2 = x * 2

module.exports = ({
  grid = true
}) => {
  return (
    <div style={sx.root}>
      <svg
        viewBox={[-x, -x, x2, x2].join(' ')}
        width={size}
        height={size}>
        <rect
          x={-x}
          y={-x}
          width={x2}
          height={x2}
          xfill={colors.white}
          fill='#eee'
        />
        <rect
          x={-8}
          y={-16}
          width={16}
          height={32}
          fill={colors.black}
        />
      </svg>
    </div>
  )
}

const colors = {
  black: '#000',
  gray: 'rgba(0,0,0,.25)',
  white: '#fff'
}

const sx = {
  root: {
    overflow: 'visible'
  }
}

