/**
 * webpack开发环境配置
 * 
 */

const merge = require('webpack-merge');
const baseConfig = require('./webpack.base')

const devConfig = {
  mode: 'development',
  
}


 module.exports = merge(baseConfig, devConfig)