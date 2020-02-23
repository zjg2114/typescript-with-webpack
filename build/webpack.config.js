var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //通过 npm 安装
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "main.js"
  },
  module: {
    rules: [
      { test: /\.ts$/, use: "ts-loader", exclude: /node_modules/ },
      {
        test: /\.jpg$/,
        use:{
          loader: "file-loader",
          options: {
            //将资源文件以源文件命名
            name: "[name].[ext]"
          }
        },
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./index.html" }),
    new CleanWebpackPlugin()
  ]
};
