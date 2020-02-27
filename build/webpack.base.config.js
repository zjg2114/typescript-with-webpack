const HtmlWebpackPlugin = require("html-webpack-plugin"); //通过 npm 安装
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  // 入口文件目录
  entry: "./src/index.ts",
  resolve: {
    extensions: [".tsx", ".js", ".mjs", ".ts", ".json"]
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
  optimization: {
    //   tree shunking
    usedExports: true,
    // 代码分割配置
    splitChunks: {
      // 只对异步代码做分割
      chunks: "async",
      //   超过30000字节的文件才会做分割
      minSize: 30000,
      maxSize: 0,
      //   引入代码模块超过一次就分割
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: "~",
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          //   权重
          priority: -10,
          filename: "venders.js"
        },
        default: {
          minChunks: 2,
          priority: -20,
          // 已经被打包过的就直接复用
          reuseExistingChunk: true,
          filename: "common.js"
        }
      }
    }
  },
  plugins: [
    // html模板生成插件
    new HtmlWebpackPlugin({ template: "./index.html" }),
    // 清除文件插件
    new CleanWebpackPlugin()
  ]
};
