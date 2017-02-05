var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  watch: true,
  watchOptions: {
    aggregateTimeout: 150,
  },
  devtool: 'cheap-module-eval-source-map',
  entry: {
    main_bundle: './src/index.js'
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].min.js',
    library: '[name]'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('main_bundle.min.css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ],
  module: {
    loaders: [
      {
        loaders: ['babel-loader'],
        include: [
          path.resolve(__dirname, "src"),
        ],
        test: /\.js$/,
        plugins: ['transform-runtime'],
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      }
    ]
  }
}
