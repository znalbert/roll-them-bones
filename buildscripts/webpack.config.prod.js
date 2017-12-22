const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const VENDOR_LIBS = [
  'lodash', 'react', 'react-dom', 'react-redux', 'react-router', 'redux'
];

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/index.tsx'),
    vendor: VENDOR_LIBS
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      }
    ]
  },
  devtool: 'cheap-eval-source-map',
  plugins: [
    new CleanWebpackPlugin(['../dist']),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      cache: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeEmptyAttributes: true,
        useShortDoctype: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new UglifyJsPlugin()
  ]
};
