const path = require('path');
const webpack = require('webpack');
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [resolve('./src/styles/core/index.scss')]
    }
  },
  css: {
    extract: {
      filename: 'css/[contentHash:7].css'
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  chainWebpack: config => {
    config.plugins.delete('preload');
  },
  devServer: {
    https: false, // https:{type:Boolean}
    open: true //配置自动启动浏览器」
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.VERSION': new Date().getTime()
      })
    ],
    externals: {
      //'vue':'Vue',
      // 'element-ui': 'ELEMENT'
      //'mint-ui':'MINT',
      //'axios':'axios',
      //'vue-router':'VueRouter',
    },
    resolve: {
      extensions: ['.js', '.json'],
      alias: {
        '@': resolve('src'),
        '@img': resolve('src/assets/img'),
        '@api': resolve('src/api')
      }
    }
  },

  productionSourceMap: false // 生产环境是否生成 SourceMap
};
