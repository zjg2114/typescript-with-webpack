var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //通过 npm 安装
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  // 入口文件目录
  entry: "./src/index.ts",
  // 出口文件目录
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "main.js"
  },
  module: {
    rules: [
      // { test: /\.ts$/, use: "ts-loader", exclude: /node_modules/ },
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
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  // 转es5的模块
                  "@babel/preset-env",
                  {
                    // 处理polyfill的方式
                    useBuiltIns: "usage",
                    corejs: 3
                  }
                ]
              ]
            }
          },
          {
            loader: "ts-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    // html模板生成插件
    new HtmlWebpackPlugin({ template: "./index.html" }),
    // 清除文件插件
    new CleanWebpackPlugin()
  ]
};
