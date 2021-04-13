const path = require('path');
const Externals = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/server/app.tsx'),
  output: {
    filename: 'app.js',
    path: path.join(__dirname, '../dist')
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts(x)?/,
        use: 'babel-loader'
      }
    ]
  },
  externals: [Externals()],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  }
}