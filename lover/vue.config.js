const amorPostCss = require('./build/postcss.config')


let _basePath = process.env.NODE_ENV === 'production'
    ? './'
    : '/';
let _assetsDir = './'

console.log('hhh')
console.log(_basePath)


module.exports = {
  publicPath: _basePath,
  assetsDir: _assetsDir,
  css: {
  	loaderOptions: {
  		postcss:amorPostCss
  	}
  }
}