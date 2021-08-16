/**
 * webpack生产环境配置
 * 
 */

const merge = require('webpack-merge');
const baseConfig = require('./webpack.base')
 
const prodConfig = {
   mode: 'production',
   
}

module.exports = merge(baseConfig, prodConfig)