const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  devServer: {
    host: '0.0.0.0',
    contentBase: "./dist"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                minimize: true
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true
              }
            }
          ],
          publicPath: ""
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader?name=assets/[name].[hash].[ext]",
            options: {
              name: "[name].[ext]",
              publicPath: "assets/"
            }
          }
        ]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
          options: {
            attrs: [":src"]
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"]
          }
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "/assets/fonts/"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HardSourceWebpackPlugin(),
    new ExtractTextPlugin({
      filename: "css/[name].[contenthash].css"
    }),
    new CleanWebpackPlugin(["dist"]),
    new UglifyJsPlugin({
      test: /\.js($|\?)/i
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      inject: "body",
      filename: "index.html"
    }),
    new HtmlWebpackPlugin({
      template: "src/sistema_login.html",
      inject: "body",
      filename: "sistema_login.html"
    }),
    new HtmlWebpackPlugin({
      template: "src/sistema_inicio.html",
      inject: "body",
      filename: "sistema_inicio.html"
    }),
    new HtmlWebpackPlugin({
      template: "src/sistema_ingresos.html",
      inject: "body",
      filename: "sistema_ingresos.html"
    }),
    new HtmlWebpackPlugin({
      template: "src/sistema_documentos.html",
      inject: "body",
      filename: "sistema_documentos.html"
    }),
    new HtmlWebpackPlugin({
      template: "src/sistema_pago.html",
      inject: "body",
      filename: "sistema_pago.html"
    }),
    new HtmlWebpackPlugin({
      template: "src/sistema_perfil.html",
      inject: "body",
      filename: "sistema_perfil.html"
    }),
    
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      Popper: ["popper.js", "default"],
      Util: "exports-loader?Util!bootstrap/js/dist/util",
      Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
      "Hammer": "hammerjs/hammer"
    }),
    new CopyWebpackPlugin([
      {
        from: "src/assets",
        to: "assets"
      },
      {
        from: "src/favicon.ico",
        to: "favicon.ico"
      },
      {
        from: "node_modules/font-awesome/fonts",
        to: "assets/fonts"
      },
      {
        from: "node_modules/ionicons-npm/fonts",
        to: "assets/fonts"
      },
      {
        from: "node_modules/slick-carousel/slick/fonts",
        to: "assets/fonts"
      },
      {
        from: "node_modules/slick-carousel/slick/ajax-loader.gif",
        to: "assets/"
      }
    ])
  ],
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: ""
  }
};
