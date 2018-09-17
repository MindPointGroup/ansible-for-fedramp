const { env } = require('process')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const autoprefixer = require('autoprefixer')
const CompressionPlugin = require('compression-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const entry = [
  '@babel/polyfill',
  './src/index.js'
]

const output = {
  filename: 'bundle.js',
  path: `${__dirname}/docs/`
}

const plugins = [
  new HtmlWebpackPlugin({
    title: 'Ansible4FedRAMP',
    filename: 'index.html',
    template: './src/index.html'
  }),
  new MiniCssExtractPlugin({
    filename: 'main.css'
  }),
  new CompressionPlugin({
    algorithm: 'gzip'
  })
]

const rules = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    query: {
      presets: [
        [
          '@babel/preset-env',
          {
            exclude: [
              'transform-classes'
            ]
          }
        ]
      ]
    }
  },
  {
    test: /\.(scss|css)$/,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          minimize: { safe: true }
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          autoprefixer: {
            browsers: ['cover 99.5%']
          },
          plugins: () => [
            autoprefixer
          ]
        }
      },
      {
        loader: 'sass-loader'
      }
    ]
  },
  {
    test: /\.(png|jpg|gif)$/,
    use: [{
      loader: 'file-loader'
    }]
  }
]

const devServer = {
  overlay: true,
  open: true
}

module.exports = {
  target: 'web',
  entry,
  output,
  devtool: (env.NODE_ENV === 'development') ? 'inline-source-map' : false,
  module: {
    rules
  },
  plugins,
  devServer
}
