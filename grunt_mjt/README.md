##  在grunt_mjt文件中  创建如下的目录结构
```$xslt
| -- grunt_mjt
    | -- mjt
    | -- src
        | -- css
        | -- js
            | -- add1.js        //写入少量代码 
            | -- add2.js        //写入少量代码
    | -- index.html
    | -- Gruntfile.js   // 在创建Gruntfile.js   只能是这个名字，首字母要大写
```

#### 1.  cd 到 grunt_mjt 文件下
``npm init   // 初始化一个webpack.json``

#### 2. 全局安装grunt 
``npm install -g grunt-cli ``

#### 3. 安装grunt
`` npm install grunt --save-dev``

#### 4.  在Gruntfile.js文件中添加如下代码
```javascript
module.exports = function(grunt){
    // 1. 初始化插件配置
    grunt.initConfig({
        //主要编码处
    });
    // 2. 加载插件任务
    // grunt.loadNpmTasks('grunt-contrib-concat');
    // 3. 注册构建任务
    grunt.registerTask('default', []);
};
// 必须添加，不然配置文件缺少，grunt不能启动，看是否成功，命令grunt，出现Done表示安装成功
```
##### 进入Grunt官网 http://www.gruntjs.net/plugins

```
// 插件的作用的都有一定的功能举例：
grunt-contrib-clean——清除文件(打包处理生成的)
grunt-contrib-concat——合并多个文件的代码到一个文件中
grunt-contrib-uglify——压缩js文件
grunt-contrib-jshint——javascript语法错误检查；
grunt-contrib-cssmin——压缩/合并css文件
grunt-contrib-htmlmin——压缩html文件
grunt-contrib-imagemin——压缩图片文件(无损)
grunt-contrib-copy——复制文件、文件夹
grunt-contrib-requirejs**——合并压缩requirejs管理的所有js模块文件
grunt-contrib-watch——实时监控文件变化、调用相应的任务重新执行 
```

```
$=> grunt-contrib-concat——合并多个文件的代码到一个文件中
    安装：npm install grunt-contrib-concat --save-dev
$=> grunt-contrib-uglify——压缩js文件
    安装：npm install grunt-contrib-uglify --save-dev    
```

#### 最终的Gruntfile.js
```javascript
module.exports = function(grunt){
    // 1. 初始化插件配置
    grunt.initConfig({
        // 主要编码处
        concat: {
            options: { // 可选项配置
                separator: ';'   // 使用;连接合并
            },
            build: { //此名称任意
                src:  ["src/js/*.js"],  // 合并哪些js文件
                dest: "mjt/js/mjt.js"   // 输出的js文件
            }
        },
        uglify: {
            my_target: {
                files: {
                    'mjt/mjt.min.js': ['mjt/js/mjt.js']
                }
            }
        }
    });
    // 2. 加载插件任务
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    // 3. 注册构建任务
    grunt.registerTask('default', ['concat','uglify']);
};
```

```
在终端运行 => grunt
输出 => Done
 
在mjt文件下会生成一个合并后的js文件
```






