const path = require('path')
const webpackMerge = require('webpack-merge')
const config = require('./webpack.base.js')

const clientConfig = {
  mode: 'development',
  entry: './src/client/index.js',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]_[local]_[hash:base64:5]'
              }
            }
          }
        ]
      }
    ]
  }
}

module.exports = webpackMerge(config, clientConfig)
