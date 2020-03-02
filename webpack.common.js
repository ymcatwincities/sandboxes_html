module.exports = {
  mode: 'development',
  //entry: './src/index.js',
  entry: './src/main.scss',
  module: {
    rules: [
      {
        test: /\.handlebars$/,
        loader: 'handlebars-loader'
      },
      {
        test: /\.html$/,
        use: [
          // 'file-loader',
          // 'extract-loader',
          {
            loader: 'html-loader',
            // loader: 'html-loader-srcset',
            options: {
              attrs: [':src', ':srcset']
            }
          }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loader: 'url-loader',
        options: {
          name: 'imgs/[name].[hash:8].[ext]',
          limit: 10000
        },
      },
      // {
      //   test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[name].[ext]',
      //         outputPath: 'fonts/'
      //       }
      //     }
      //   ]
      // }
    ]
  }
};
