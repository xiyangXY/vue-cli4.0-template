const GeneraterAssetPlugin = require('generate-asset-webpack-plugin')
const serverConfig = require('./serverConfig.json')
const createJson = function(compilation) {
    return JSON.stringify(serverConfig);
};
module.exports = {
    // 配置不需要eslint语法检测
    lintOnSave:false,
    // 不生成map文件
    productionSourceMap:false,
    // 配置反向代理
    devServer:{
        // 设置代理
        proxy:{
            // api 代理前缀
            '/api':{
                // 源地址
                target:'https://api.apiopen.top',
                // 是否允许跨域
                changeOrigin:true,
                // 是否代理websockets
                ws:true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    configureWebpack:{
        plugins:[
            new GeneraterAssetPlugin({
                filename: 'serverConfig.json',//输出到dist根目录下的serverConfig.json文件,名字可以按需改
                fn: (compilation, cb) => {
                    cb(null, createJson(compilation));
                }
            })
        ]
    }
}