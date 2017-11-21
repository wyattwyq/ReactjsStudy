# ReactjsStudy
learn from imooc-React.js入门基础与案例开发

## 坑1
#### Question：

ERROR in ./src/xxx.js
Module build failed: TypeError: fileSystem.statSync is not a function
    at module.exports (node_modules/babel-loader/lib/utils/exists.js:7:25)
    at find (node_modules/babel-loader/lib/resolve-rc.js:13:9)
    at Object.module.exports (node_modules/babel-loader/lib/index.js:113:132)

#### Solve：

      webpack 1.x | babel-loader <= 6.x

      webpack 2.x | babel-loader >= 7.x (recommended) (^6.2.10 will also work, but with deprecation warnings)

      webpack 3.x | babel-loader >= 7.1
