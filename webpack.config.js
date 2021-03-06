const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devEnvironment = process.env.NODE_ENV !== 'production';

module.exports = {
  devtool: 'eval-source-map',
  devServer: {
    port: 3000,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'dist')
  },
  entry: ['babel-polyfill', path.resolve(__dirname, 'src/js/index')],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      }, {
        test: /\.html$/,
        use: 'html-loader'
      }, {
        test: /\.(scss|sass|css)$/,
        exclude: /node_modules/,
        loaders: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: 'global',
              sourceMap: devEnvironment,
              importLoaders: 1
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new Dotenv({
      path: devEnvironment ? '.env.dev' : '.env'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve('src/index.html'),
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: devEnvironment ? '[name].css' : '[name].[hash].css',
      chunkFilename: devEnvironment ? '[id].css' : '[id].[hash].css'
    })
  ],
  resolve: {
    alias: {
      Lib: path.resolve(__dirname, 'src/js/lib'),
      Components: path.resolve(__dirname, 'src/js/components'),
    }
  }
};
