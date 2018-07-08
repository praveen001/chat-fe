const path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  webpack = require('webpack');

module.exports = {
  mode: 'development',

  entry: './src/index.js',

  devtool: 'inline-source-map',

  devServer: {
    historyApiFallback: {
      disableDotRule: true
    },
    disableHostCheck: true,
    hot: true,
    https: true,
  },

  output: {
    filename: '[name].js',
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    sourceMapFilename: '[name].map'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env', 'babel-preset-stage-2', 'babel-preset-react']
          }
        }
      }, {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader?name=./images/[name].[ext]'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.template.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};