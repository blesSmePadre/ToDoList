var path = require('path')
var webpack = require('webpack')

module.exports = {
  watch: true,
  watchOptions: {
    aggregateTimeout: 150,
  },
  devtool: 'cheap-module-eval-source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.NoErrorsPlugin()
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
      }
    ]
  }
}
