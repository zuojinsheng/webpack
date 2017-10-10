/**
 * [exports description]
 * @type {Object}
 */
module.exports = {
  entry:__dirname + '/app/main.js', //唯一入口  __dirname是node.js中一个全局变量，它指向当前执行脚本所在的目录
  output:{
    path:__dirname + '/public', //打包后的文件存放的地方
    filename:'bundle.js', //打包后输出文件的文件名
  },

  devServer: {
    contentBase: "./public", //本地服务器所加载的页面的目录
    historyApiFallback: true, //在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    inline: true //设置为true，当源文件改变时会自动刷新页面
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "es2015","react"
            ]
          }
        },
        exclude: /node_modules/
      }
    ]
  }
};
