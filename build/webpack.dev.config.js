const webpack = require("webpack");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.config");

const devConfig = {
  //  开发模式不会压缩代码
  mode: "development",
  //  编译文件的映射文件
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: "../dist",
    open: true,
    port: 8080,
    hot: true,
    hotOnly: true
  },
  plugins: [
    //模块热更新插件
    new webpack.HotModuleReplacementPlugin()
  ]
};
module.exports = merge(baseConfig, devConfig);
