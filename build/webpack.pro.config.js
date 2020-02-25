const merge = require("webpack-merge");
var path = require("path");
const baseConfig = require("./webpack.base.config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const proConfig = {
  //  开发模式不会压缩代码
  mode: "production",
  // 出口文件目录
  output: {
    path: path.resolve(__dirname, "../dist"),
    //重新打包部署时 防止缓存
    filename: "[name].[contenthash].js",
    chunkFilename: "[name].[contenthash].js"
  },
  //  编译文件的映射文件
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.(le|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "less-loader",
          "postcss-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
module.exports = merge(baseConfig, proConfig);
