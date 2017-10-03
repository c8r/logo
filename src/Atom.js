const React = require('react')

const sx = {
  svg: {
    display: 'block',
    maxWidth: '100%',
    margin: 0,
    fill: 'none',
  },
  electronA: {
    transformOrigin: '0 0',
    animationName: 'spinA',
    animationDuration: '3s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
  },
  electronB: {
    transformOrigin: '0 0',
    animationName: 'spinB',
    animationDuration: '3s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
  },
  staticA: {
    animation: 'none',
    transform: 'rotate3d(0, 1, 1, 100deg)'
  },
  staticB: {
    animation: 'none',
    transform: 'rotate3d(1, 0, 1, 100deg)'
  }
}

const keyframes = `
/* <![CDATA[ */
@keyframes spinA {
  50% { transform: rotate3d(0, 1, 1, 180deg) }
  100% { transform: rotate3d(0, 1, 1, 360deg) }
}
@keyframes spinB {
  50% { transform: rotate3d(1, 0, 1, 180deg) }
  100% { transform: rotate3d(1, 0, 1, 360deg) }
}
/* ]]> */
`

const Atom = props => {
  const electronProps = {
    cx: 0,
    cy: 0,
    r: 11,
    strokeWidth: 4,
    vectorEffect: 'non-scaling-stroke'
  }
  const size = props.size || 256

  return (
    <svg
      viewBox='-12 -12 24 24'
      size={props.size}
      width={size}
      height={size}
      stroke={props.color || 'currentcolor'}
      style={sx.svg}>
      <style dangerouslySetInnerHTML={{ __html: keyframes }} />
      <g transform='rotate(5 0 0)'>
        <circle
          {...electronProps}
          style={{
            ...sx.electronA,
            ...(props.static ? sx.staticA : {})
          }}
        />
        <circle
          {...electronProps}
          style={{
            ...sx.electronB,
            ...(props.static ? sx.staticB : {})
          }}
        />
      </g>
    </svg>
  )
}

module.exports = Atom
