const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './index.js',
  output: {
    filename: 'server.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'build')
  },
  target: 'node',   // THIS IS THE IMPORTANT PART
  externals: [nodeExternals()],
  mode: 'development'
}