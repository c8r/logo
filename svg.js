require('babel-register')({
  presets: [
    'babel-preset-react'
  ].map(require.resolve)
})
const fs = require('fs')
const path = require('path')
const React = require('react')
const { renderToStaticMarkup } = require('react-dom/server')

const Logo = require('./src/Logo')

const svg = renderToStaticMarkup(
  Logo({})
)

const filename = path.join(__dirname, 'dist', 'compositor.svg')

console.log(svg)
fs.writeFileSync(filename, svg)

