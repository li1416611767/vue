'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api': {
        // target: 'http://192.168.180.230:8084',
        
        target: 'http://192.168.214.242:30067',
        changeOrigin: true, 
        secure: false ,
        pathRewrite: {
          '^/api': '' //重写接口，去掉/api
         }
      },
      '/swaager': {
        // target: 'http://192.168.180.230:8084',
        target: 'http://192.168.214.242:30066',
        changeOrigin: true, 
        secure: false ,
        pathRewrite: {
          '^/swaager': '' //重写接口，去掉/api
         }
      }
    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    
    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  baseUrl: {
    dev: 'http://localhost:8080',
    // dev: 'http://192.168.180.230:8080',
    pro: '',
    soket:'ws://192.168.180.32:9330',//服务器状态
    soketTimer:'ws://192.168.180.32:9331',//时间状态
    soketBase:'ws://192.168.180.225:40001',//数据库状态
    Offsetsocket:'ws://192.168.180.32:9332',//消费偏移量
    Lagsocket:'ws://192.168.180.32:9333',//消费滞后量
    Kafkatopico:'ws://192.168.180.32:9334',//主题偏移量
    Elasticsearch:'ws://192.168.180.32:9335',//elasticsearch
    Radis:'ws://192.168.180.32:9336'//Radis
  },
}
