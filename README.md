### | webpack
webpack它支持了AMD 和 CommonJS 类型，通过loader 机制也可以使用ES6模块格式。还有强大的 code splitting。webpack 是个十分强大的工具，它正在想一个全能型的构建工具发展。
```
// webpack.config.js
'use strict'
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const utils = require('./utils')

var config = {
  // 入口
  entry: {
    app: './src/main.js'
  },
  // 出口
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  // 加载器配置（需要加载器转化的模块类型）
  module: {
    rules: [
      {
        test: '/\.css$/',
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
  // 插件
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
  ]

}

module.exports = config
```

### |  Grunt
Grunt的出现早于Gulp，Gulp是后起之秀。他们的本质都是通过 JavaScript 语法实现了shell script 命令的一些功能。比如利用jshint插件 实现 JavaScript 代码格式检查这一个功能。早期需要手动在命令行中输入 jshint test.js，而 Grunt 则通过文件 Gruntfile.js 进行配置
```
// Gruntfile.js
module.exports = function(grunt) {
  grunt.initConfig({
    // js格式检查任务
    jshint: {
      src: 'src/test.js'
    }
    //  代码压缩打包任务
    uglify: {}
  });
  // 导入任务插件
  grunt.loadnpmTasks('grunt-contrib-uglify');
  // 注册自定义任务, 如果有多个任务可以添加到数组中
  grunt.regusterTask('default', ['jshint'])
} 
```

### | Gulp
Gulp吸取了Grunt的优点，拥有更简便的写法，通过流（Stream）的概念来简化多任务之间的配置和输出.通过配置gulpfile.js文件来实现，一个简单的gulpfile.js配置如下
```
// gulpfile.js
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');

// 代码检查任务 gulp 采取了pipe 方法，用流的方法直接往下传递
gulp.task('lint', function() {
  return gulp.src('src/test.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// 压缩代码任务
gulp.task('compress'， function() {
  return gulp.src('src/test.js')
    .pipe(uglify())
    .pipe(gulp.dest('build'));
});

// 将代码检查和压缩组合，新建一个任务
gulp.task('default', ['lint', 'compress']);

```


### 区别
```
gulp和grunt是流管理工具: 
    => 通过一个个task配置执行用户需要的功能，如格式检验，代码压缩等，
    => 经过这两者处理的代码只是局部变量名被替换简化，整体并没有发生改变，还是你的代码。

webpack: 进行了更彻底的打包处理，更加偏向对模块语法规则进行转换。
    => 主要任务是突破浏览器的鸿沟，将原本浏览器不能识别的规范和各种各样的静态文件
    => 进行分析，压缩，合并，打包，最后生成浏览器支持的代码，
    => 因此，webapck打包过后的代码已经不是你写的代码了，或许你再去看，已经看不懂啦

```
  
