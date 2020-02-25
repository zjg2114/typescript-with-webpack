const webpack = require("webpack");
var path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.config");

const devConfig = {
  //  开发模式不会压缩代码
  mode: "development",
  // 出口文件目录
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].js",
    chunkFilename: "[name].js"
  },
  //  编译文件的映射文件
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: "../dist",
    open: true,
    port: 8080,
    hot: true,
    hotOnly: true
  },
  module: {
    rules: [
      {
        test: /\.(less|css)$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "less-loader" // compiles Less to CSS
          },
          {
            loader: "postcss-loader" // add prefix to css
          }
        ]
      }
    ]
  },
  plugins: [
    //模块热更新插件
    new webpack.HotModuleReplacementPlugin()
  ]
};
module.exports = merge(baseConfig, devConfig);
