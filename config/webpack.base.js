/**
 * webpack基础配置
 * 基础主要的内容就是解析文件解析资源
 * 需要解析的文件
 * js
 *  将es6转成es5  babel-loader
 * css
 * scss         node-sass sass-loader
 * css          css-loader
 * 样式补全       postcss
 * 移动端的话     px2vw  /  px2rem  flex-lib
 * 将css提取出来生一个文件  
 * html
 *  自动引入css文件和js文件  html-webpack-plugin
 */
module.exports = {
  module: {
    // js文件配置
    rules: [
     {
      test: /\*.js$/,
      use: [
        'babel-loader'
      ]
     }
    ]
  }
}