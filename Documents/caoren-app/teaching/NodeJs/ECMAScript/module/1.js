/**
 * Created by yanfa on 2016/11/11.
 */

/**
 * 一个文件就是一个模块
 * 每个模块都有自己的作用域
 * 我们用var来声明的变量并不是全局的，而是当前模块下的
*/

//var a = 100;
//console.log(a);
//
//global.a = 200;
//console.log(global.a);

// __filename:当前文件被解析后的绝对路径
//console.log(__filename);

/*
* 模块加载系统
* 想再当前页面中用到2.js中的东西
*
* require('模块')
* */

//require('./2.js');

/*
* 模块加载机制：
*   路径
*       绝对路径
*           require('/Users/yanfa/Documents/teaching/NodeJs/ECMAScript/module/2.js')
*       相对路径
*           require('./2.js')
*           require('2.js')  //加载node中的核心模块，或者是node_modules
* */

/*
* 1、首先按照加载的模块的文件名称进行查找
* 2、如果没有找到，则会在模块文件名称后加上.js后缀进行查找
* 3、如果还没有找到，则会在模块文件名称后加上.json后缀进行查找
* 4、如果还没有找到，则会在模块文件名称后加上.node的后缀进行查找
* 文件名称 > .js > .json > .node
* */