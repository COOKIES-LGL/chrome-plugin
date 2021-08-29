module.exports ={
  publicPath: "/newTab/dist/",
  configureWebpack: {
    resolve: {
      alias: {
        '@icon': require('path').join(
          __dirname,
          '.newTab/assets/'
        ),
        '@/': require('path').join(
          __dirname,
          'src/'
        ),
      }
    },
  },
  devServer: {
    port: 8080, // 服务开启端口
    open: true, // 自动打开浏览器
    disableHostCheck: false, // 开启热更新
    hot: true,
  },
}
