const path = require('path');

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve('build'),
    filename: 'client.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};