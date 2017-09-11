import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

// const VENDOR_LIBS = [];

export default {
  entry: {
    app: path.resolve(__dirname, 'src/index'),
    // vendor: VENDOR_LIBS
  },
  target: 'web',
	output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',
		filename: 'app.[chunkhash].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor'
    // })
  ]
}
