var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

//__dirname是node里面的一个变量，指向的是当前文件夹目录
var ROOT_PATH = path.resolve(__dirname);
//这个我们的文件入口，等下我们就会从main.js这个文件作为入口
var APP_PATH = path.resolve(ROOT_PATH, 'src/main');
var APP_PATH = path.resolve(ROOT_PATH, 'src/main');
//这个是文件打包出来的输出路径
var BUILD_PATH = path.resolve(ROOT_PATH, './test/');

module.exports = {
  //页面入口文件配置
  entry: [APP_PATH],
  //页面输出文件配置
  output: {
    //输出目录
    path: BUILD_PATH,
    //在index中匹配
    publicPath: '/test/',
    //输出的js名称
    filename: 'build.js',
    chunkFilename:'[id].build.js?[chunkhash]'
  },
  //加载器配置
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        //loader: 'url-loader?limit=100000',
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader' })
      }
    ]
  },
  plugins:[
    new ExtractTextPlugin("styles.css"),
    new webpack.ProvidePlugin({
      'window.jQuery': "jquery",
      jQuery: "jquery",
      $: "jquery"
    }),
    new HtmlWebpackPlugin({
      title: '首页',
      inject: false,
      template: path.join(__dirname, './index.html'),
      filename: 'index.html'
      //chunks: ['signPhone', 'vendor']
    })
  ],
  resolve: {
    //省略后缀
    extensions: ['.js'],
    //别名
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'components':path.join(__dirname , './src/components'),
      'stylus':path.join(__dirname,'./src/stylus'),
      'router':"vue-router/dist/vue-router.js",
      'vue-slider':'vue-slider/dist/vue-slider.js',
      'Vuex':'vuex/dist/vuex.min.js',
      'VueCoreImageUpload':'vue2.x-core-image-upload/src/vue.core.image.upload.vue',
      'script':path.join(__dirname,'./src/script'),
      'jquery':path.join(__dirname,'./src/script/jquery'),
      'module':path.join(__dirname,'./src/module')
    }
  },
  //本地服务器配置
  devServer: {
    historyApiFallback: true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    noInfo: true
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true, 
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
