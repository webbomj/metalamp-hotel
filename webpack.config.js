const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

let mode = 'development';
if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}

const PAGES_DIR = path.resolve(__dirname, 'src/pages');
const PAGES = fs.readdirSync(PAGES_DIR);

module.exports = {
  mode,
  entry: path.resolve(__dirname, './src/index.js'),
  context: path.resolve(__dirname, 'src'),
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[name][ext]',
    clean: true,
  },

  devtool: 'source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/images/*'),
          to: path.resolve(__dirname, 'dist', 'assets', `[name][ext]`),
          noErrorOnMissing: true,
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    ...PAGES.map((page) => {
      if (page === 'startPage') {
        return new HtmlWebpackPlugin({
          filename: `index.html`,
          template: `${PAGES_DIR}/${page}/${page}.pug`,
        });
      }
      return new HtmlWebpackPlugin({
        filename: `${page}.html`,
        template: `${PAGES_DIR}/${page}/${page}.pug`,
      });
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      browsers: 'last 2 versions',
                    },
                  ],
                ],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        // generator: {
        //   filename: 'images/[name][ext][query]',
        // },
        // use: {
        //   loader: 'file-loader',
        //   options: {
        //     name: '[name].[ext]',
        //     outputPath: 'assets',
        //     publicPath: 'assets',
        //   },
        // },
      },
      {
        test: /\.(woff|woff2|eot|tff|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'simple-pug-loader',
          },
        ],
        // loader: 'pug-loader',
        // exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
