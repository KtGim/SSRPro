/*
 * @Author: your name
 * @Date: 2020-11-13 20:26:51
 * @LastEditTime: 2020-11-15 16:16:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node001\config\index.js
 */
const path = require('path');
let config = {
    viewDir: path.join(__dirname, '..', 'views'),
    staticDir: path.join(__dirname, '..', 'assets'),
}
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === "development") {
    const devConfig = {
        port: 9000,
        cache: false,
    }
    config = {...config, ...devConfig}
}

if (process.env.NODE_ENV === "development") {
    const proConfig = {
        port: 8000,
        cache: false,
    }
    config = {...config, ...proConfig}
}

module.exports = config;