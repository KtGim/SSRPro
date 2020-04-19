/*
 * @Author: your name
 * @Date: 2020-04-19 21:41:37
 * @LastEditTime: 2020-04-19 21:43:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SSRPro\nodeTest\fsDir\pathdemo.js
 */
const path = require('path')

console.log(path.relative('./1.txt', '../httpDir/demo01.js'))