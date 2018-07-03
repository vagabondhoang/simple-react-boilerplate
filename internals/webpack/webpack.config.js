const path = require('path')
const DotenvPlugin = require('dotenv-webpack')

const parentDir = path.join(__dirname, '../')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: [
    path.join(process.cwd(), 'app/app.js'),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '/images/[name]_[hash:7].[ext]',
            },
          },
        ],
      },
      {
        // Preprocess 3rd party .css files located in node_modules
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    path: path.join(parentDir, '/build'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: parentDir,
    historyApiFallback: true,
    port: 9000,
    hot: true,
  },
  resolve: {
    modules: ['app', 'node_modules'],
    extensions: [
      '.js',
    ],
  },
  plugins: [
    new DotenvPlugin({
      path: './.env',
      safe: false,
    }),
    // Minify and optimize the index.html
    new HtmlWebpackPlugin({
      template: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        removeEmptyAttributes: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
}
