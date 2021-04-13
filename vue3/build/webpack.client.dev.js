const { resolve } = require('path');
const { merge } = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssWebpackPlugin = require('mini-css-extract-plugin');

const baseConfig = require('./webpack.base');

const devConfig = {
  mode: 'development',
  entry: resolve(__dirname, '../src/client/entry-client.js'),
  output: {
    filename: 'client-bundle.js'
  },
  devServer: {
    contentBase: resolve(__dirname, '../dist'),
    historyApiFallback: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssWebpackPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new MiniCssWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../src/client/index.template.html')
    })
  ]
}

const configs = merge(baseConfig, devConfig);

module.exports = configs;