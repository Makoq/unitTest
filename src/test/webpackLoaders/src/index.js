const imagemin = require('imagemin');
const loaderUtils = require('loader-utils');
const imageminOptipng = require("imagemin-optipng")
const schemaValidation = require('schema-utils')
const schemaJson = require('.././schema.json')
module.exports= function loader(source) {
      
    var config = loaderUtils.getOptions(this)
    
    if (!config) {
        config={}
    }
  
    //根据JSON校验loader的Option，有问题在打包节点报错
    schemaValidation.validate(schemaJson, config, {
      name:"imageCompress"
    })
    //启动 Loader Runner的异步模式
    var callback=this.async()
    
    var plugins = []
    
    //配置optipng的无损压缩方式，并传入loader配置参数
    plugins.push(imageminOptipng(config.pngCompress))
    
    //调用压缩算法
    imagemin
      .buffer(source, {
        plugins
      })
      .then(data => {
        callback(null, data);
      })
      .catch(err => {
        callback(err);
      });    
}
module.exports.raw = true;
