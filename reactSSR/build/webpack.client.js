const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/client/index.tsx'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '../dist/asserts')
  },
  module: {
    rules: [
      {
        test: /\.ts(x)?/,
        use: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  }
}