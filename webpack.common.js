module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.handlebars$/,
        loader: 'handlebars-loader'
      },
      {
        test: /\.html$/,
        use: [
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
      }
    ]
  }
};
