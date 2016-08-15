var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: __dirname + '/main.js',
  output: { path: __dirname, filename: 'dist/bundle.js' },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          plugins: [
            "transform-flow-strip-types",
            "syntax-trailing-function-commas",
            "transform-class-properties"
          ],
        }
      }
    ]
  },
  plugins: [
    new webpack.OldWatchingPlugin()
  ],
};
