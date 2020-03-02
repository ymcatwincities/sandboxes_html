const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyPlugin = require('copy-webpack-plugin');

const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'none',
  output: {
    filename: 'main.[contentHash:8].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new ManifestPlugin(),
    new MiniCssExtractPlugin({filename: '[name].[contentHash:8].css'}),
    new webpack.LoaderOptionsPlugin({
      options: {
        handlebarsLoader: {}
      }
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      favicon: './src/assets/favicon.ico',
      template: './src/index.handlebars',
      templateParameters:require('./src/data.json'),
      meta: {
        MobileOptimized: 'width',
        HandheldFriendly: 'true',
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      }
    }),
    new ImageminPlugin({}),
    new CopyPlugin([
      { from: 'src/assets/carnation-custom-700.png', to: 'og_image.png' },
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
});
