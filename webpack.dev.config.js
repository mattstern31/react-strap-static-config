var path = require('path');
var webpack = require('webpack');
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var env = process.env.WEBPACK_BUILD || 'development';

var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpackDevConfig = require('./webpack.base.config')('development');
var webpackProdConfig = require('./webpack.base.config')('production');

var paths = [
  '/',
  '/components',
  '/components/buttons',
  '/components/popovers',
  '/404.html'
];

var config = [{
  // context: path.join(__dirname, './lib'),
  devtool: 'source-map',
  devServer: {
    contentBase: './build',
    stats: {
      chunks: false
    }
  },
  entry: {
    main: './docs/lib/app.jsx'
  },
  node: {
    fs: 'empty'
  },
  output: {
    filename: 'bundle.js',
    path: './build',
    libraryTarget: 'umd'
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new CopyWebpackPlugin([{ from: './docs/static', to: 'assets' }]),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new StaticSiteGeneratorPlugin('main', paths, {}),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("/assets/style.css")
  ],
  module: {
    loaders: [
      {
        test: /\.(json)$/,
        loaders: [
          'json-loader?cacheDirectory'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader?cacheDirectory'
        ]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    alias: {
      'bootstrap-css': path.join(__dirname,'node_modules/bootstrap/dist/css/bootstrap.css'),
      reactstrap: path.resolve('./lib')
    }
  }
}];

if (env === 'development') {
  config.push(webpackDevConfig);
  config.push(webpackProdConfig);
} else {
  config[0].plugins.push(new webpack.optimize.UglifyJsPlugin(
    {
      minimize: true,
      compress: {
        warnings: false
      },
      mangle: true
    }
  ));
}

module.exports = config;
