
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
  mode: 'production',
  entry: './src/main.js',
  devServer: {
    contentBase: '/dist',
    disableHostCheck: true
  },
  module: {
    rules: [
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpeg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader'
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: { modules: true }
          },
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
