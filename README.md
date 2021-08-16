# webpack-vue
vue项目webpack配置

**目录介绍**

- `config` 是webpack配置的代码


# config

- `webpack.base.js` 是基础配置
- `webpack.dev.js` 是开发环境配置
- `webpack.prod.js` 是生产环境配置
- `webpack.ssr.js` 是服务端生产环境配置

## base

base的主要内容是:

- 资源解析
- 样式增强
- 目录清理
- 多页面打包
- 命令行信息显示优化
- 错误捕获和处理
- css提取成一个单独的文件

其中资源解析又包含：

- 解析ES6
- 解析Vue
- 解析CSS
- 解析scss
- 解析图片
- 解析字体

样式增强又包含：

- 前缀补齐
- 转换rem

| loader/plugin | 作用 |
|----|----|
|babel-loader|将es6转成es5|
| css-loader | 解析css |
| sass-loader | 解析scss文件|
| file-loader | 解析文件或字体 |
| url-loader | 解析文件或字体 |

