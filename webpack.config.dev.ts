import * as webpack from 'webpack';
import * as path from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as CleanWebpackPlugin from 'clean-webpack-plugin';

// const VENDOR_LIBS = [];

const config: webpack.Configuration = {
  entry: {
    app: path.resolve(__dirname, 'src/index.ts'),
    // vendor: VENDOR_LIBS
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'app.[chunkhash].js'
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
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    open: true
  },
  devtool: 'cheap-eval-source-map',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor'
    // })
  ]
};

export default config;
