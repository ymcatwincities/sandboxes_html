const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  devtool: "none",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        handlebarsLoader: {}
      }
    }),
    new ManifestPlugin(),
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      // template: "./src/index.html",
      template: "./src/index.handlebars",
      showErrors: true,
      templateParameters:require('./src/data.json')
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
});
