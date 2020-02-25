const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.config");
const proConfig = {
  //  开发模式不会压缩代码
  mode: "production",
  //  编译文件的映射文件
  devtool: "cheap-module-source-map"
};
module.exports = merge(baseConfig, proConfig);
