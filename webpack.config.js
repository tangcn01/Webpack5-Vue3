// webpack.config.js
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader/dist/index");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  devtool: "cheap-module-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      title: "web",
      minify: {
        collapseWhitespace: true, // 去掉空格
        removeComments: true, // 去掉注释
      },
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
        exclude: /node_modules/,
        include: path.resolve(__dirname, "src"),
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(jpg|png|jpeg|gif|bmp)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 1024,
            fallback: {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
              },
            },
          },
        },
      },
      {
        test: /\.(mp4|ogg|mp3|wav)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 1024,
            fallback: {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
              },
            },
          },
        },
      },
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".json", ".vue"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@api": path.resolve(__dirname, "./src/api"),
      process: "process/browser",
    },
  },
  devServer: {
    port: 9000,
    hot: true,
    open: true,
    contentBase: path.resolve(__dirname, "dist"),
    historyApiFallback: true,
  },
};
