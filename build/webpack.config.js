var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //通过 npm 安装
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  //  开发模式不会压缩代码
  mode: "development",
  // 入口文件目录
  entry: "./src/index.ts",
  // 出口文件目录
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "main.js"
  },
  module: {
    rules: [
      { test: /\.ts$/, use: "ts-loader", exclude: /node_modules/ },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: {
          // 打包静态资源文件
          loader: "url-loader",
          options: {
            //将资源文件以源文件命名
            name: "[name].[ext]",
            outputPath: "images/",
            // 不超过100kb 打包到js文件中
            limit: 102400
          }
        }
      },
      {
        test: /\.{less|css}$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
            options:{
              importLoader:2,
              // 样式模块化
              module:true
            }
          },
          {
            loader: "less-loader" // compiles Less to CSS
          },
          {
            loader:"postcss-loader" // add prefix to css
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./index.html" }),
    new CleanWebpackPlugin()
  ]
};
