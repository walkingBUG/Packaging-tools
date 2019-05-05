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

/**


//引入gulp模块
var gulp = require('gulp');
//定义默认任务
gulp.task('任务名', function() {
  // 将你的任务的任务代码放在这
  return ...
});
//异步执行
gulp.task('default', ['任务'])


 **/
