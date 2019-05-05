## gulp目录结构
```
| -- gulp_mjt
    | -- dist
    | -- src
        | -- css
        | -- js
            | -- gulp1.js  // 写入少量代码
            | -- gulp2.js  // 写入少量代码
        | -- less
    | -- index.html
    | -- gulpfile.js
    | -- package.json   // npm init 生成

```

#### 1.gulp中文主页: http://www.gulpjs.com.cn/

#### 2. 安装gulp 
```
全局安装gulp => npm install gulp -g
局部安装gulp => npm install gulp --save-dev
```

#### 3. 配置编码: gulpfile.js
````javascript
'use strict';
//引入模块
let gulp = require('gulp');
let concat = require('gulp-concat');
let uglify = require('gulp-uglify');
let rename = require('gulp-rename');
//定义默认任务
gulp.task('minifyjs', function() {
  // 将你的任务的任务代码放在这
  return gulp.src('src/js/*.js')          //操作的源文件
    .pipe(concat('built.js'))        //合并到临时文件
    .pipe(gulp.dest('dist/js'))           //生成到目标文件夹
    .pipe(rename({suffix: '.min'}))  //重命名
    .pipe(uglify())                       //压缩
    .pipe(gulp.dest('dist/js'));
});
//异步执行
gulp.task('default', ['minifyjs']);

````
#### 4. 运行
```
运行 => gulp
```

==> 报错 
```
assert.js:42
  throw new errors.AssertionError({
  ^
AssertionError [ERR_ASSERTION]: Task function must be specified
    at Gulp.set [as _setTask] (/Users/fan/gongjianxun/goLearning/Vue/webpackVue/gulp_mjt/node_modules/undertaker/lib/set-task.js:10:3)
    at Gulp.task (/Users/fan/gongjianxun/goLearning/Vue/webpackVue/gulp_mjt/node_modules/undertaker/lib/task.js:13:8)
    at Object.<anonymous> (/Users/fan/gongjianxun/goLearning/Vue/webpackVue/gulp_mjt/gulpfile.js:21:6)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Module.require (module.js:596:17)
    at require (internal/module.js:11:18)
```
==> 解决
由于版本问题详细描述见 https://www.jianshu.com/p/c30ff8592421
```
1. 查看gulp全局版本和本地项目版本
    npm -v
若
 ==> CLI version   ==>  3.9.1
 ==> Local version ==>  4.0.0
在package.json中
将 ==> "gulp": "^4.0.0", 
改为 ==>  "gulp": "^3.9.1",
重新运行 ==> npm install 
运行项目 ==> gulp
```
