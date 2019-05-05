module.exports = function(grunt){
  // 1. 初始化插件配置
  grunt.initConfig({
    //主要编码处
    concat: {
      options: { //可选项配置
        separator: ';'   //使用;连接合并
      },
      build: { //此名称任意
        src:  ["src/js/*.js"],  //合并哪些js文件
        dest: "mjt/js/mjt.js" //输出的js文件
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
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // 3. 注册构建任务
  grunt.registerTask('default', ['concat','uglify']);

};
