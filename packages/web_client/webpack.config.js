const path = require('path');

const copyToRoot = true
const file_path = copyToRoot ? '../../public/js' : 'build';

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(file_path),
    filename: 'client.js'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
};