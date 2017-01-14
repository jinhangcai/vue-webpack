/**
 * Created by Administrator on 2017/1/14.
 */
var webpackConfig = require('./webpack.config.js'),
    webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = webpackMerge(webpackConfig, {
    output: {
        path: './test/',
        filename: 'build.js',
        publicPath: '/test/'
        //,publicPath: "assets/"
    },
    module: {
        //loaders: [{
        //    test: /urlMap\.js$/,
        //    loader: 'string-replace',
        //    query: {
        //        search: 'http://local.bbzc360.com',
        //        replace: 'http://h5.test.bbzc360.com'
        //    }
        //}]
    },
    //vue: {
    //    loaders: {
    //        //less: ExtractTextPlugin.extract('vue-style-loader', 'css!less')   // vue组件样式提取成文件
    //    }
    //},
    plugins:[
        new ExtractTextPlugin("styles.[hash].css"),
        //new webpack.NormalModuleReplacementPlugin(/module\/ajaxMap/, function(result) {
        //    result.request = result.request.replace(/(module\/ajaxMap)/, 'module/urlMap');
        //})
    ]
});