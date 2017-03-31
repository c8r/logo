
const React = require('react')
const Grid = require('./Grid')

const size = 512

module.exports = ({
  grid = true
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
          fill={colors.white}
        />
        {grid && <Grid />}
        <rect
          x={-4}
          y={-8}
          height={16}
          width={8}
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

