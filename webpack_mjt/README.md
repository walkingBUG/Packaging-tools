## 目录结构

```
| -- webpack_mjt
    | -- dist
        | -- bundle.js
        | -- index.html
    | -- src
        | -- css
        | -- img
        | -- js
            | -- entry.js
            | -- math.js
        | -- json
            | -- data.json
    | -- package.json
    | -- webpack.config.js
```
### 一、js打包
#### 1. 初始化项目文件 
```$xslt
cd webpack_mjt
npm init

{
  "name": "webpack_test",
  "version": "1.0.0"
} 

```

#### 2. 安装webpack
```$xslt
->  npm install webpack -g  //全局安装
->  npm install webpack --save-dev  //局部安装
```

#### 3. dist / index.html
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>webpack 打包工具</title>
</head>
<body>
<script type="text/javascript" src="bundle.js"></script>
</body>
</html>

```

#### 4. src / js / math.js
```javascript
export function square(x) {
  return x * x;
}
export function cube(x) {
  return x * x * x;
}
```

#### 5.  src / json / data.json
```json
{
  "name": "Tom",
  "age": 12
}
```

#### 6. 更新入口js: entry.js
```javascript
import {cube} from './math'
import data from '../json/data.json'
//注意data会自动被转换为原生的js对象或者数组
document.write("entry.js is work <br/>");
document.write(cube(2) + '<br/>');
document.write(JSON.stringify(data) + '<br/>')
```

#### 7. 使用webpack配置文件 webpack.config.js
```javascript
const path = require('path');   //path内置的模块，用来设置路径。
module.exports = {
  entry: './src/js/entry.js',   // 入口文件
  output: {                     // 输出配置
    filename: 'bundle.js',      // 输出文件名
    path: path.resolve(__dirname, 'dist')   //输出文件路径配置
  }
};
```

#### 8. 配置npm命令: package.json  ==> 添加
```metadata json
"scripts": {
  "build": "webpack"
},
```

#### 9. 打包
``npm run build``

#### 报错
```$xslt
运行  ==>  npm run build
报错  ==>     Error: Cannot find module 'webpack-cli'
运行  ==>  npm install webpack-cli -g
运行  ==>  npm run build
报错  ==>     Error: Cannot find module 'webpack'
运行  ==>  npm install --save-dev webpack
          npm install webpack-dev-server
运行  ==>  npm run build
成功
```









