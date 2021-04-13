const { resolve } = require('path');
const { merge } = require('webpack-merge');

const NodeExternals = require('webpack-node-externals');

const baseConfig = require('./webpack.base');

const serverConfig = {
  mode: 'development',
  entry: resolve(__dirname, '../src/client/entry-server.js'),
  output: {
    filename: 'server-bundle.js',
    libraryTarget: 'commonjs2'
  },
  target: 'node',
  externals: NodeExternals(),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['ignore-loader']
      }
    ]
  },
  plugins: []
}

module.exports = merge(baseConfig, serverConfig);