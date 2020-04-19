/*
 * @Author: your name
 * @Date: 2020-04-19 22:01:12
 * @LastEditTime: 2020-04-19 22:20:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SSRPro\nodeTest\fsDir\readDemo.js
 */
const fs = require('fs')

fs.open('./txts/1.txt', 'r', (err, fd) => {
    if (err) return;
    const buffer = new Buffer.alloc(1024)
    const len = buffer.length;
    console.log(len, 'buffer len')
    const offset = 5;
    let chars = '';
    fs.read(fd, buffer, 0, len, 3, (err, bytesRead) => {
        for(let i = 0; i < bytesRead; i ++) {
            chars += String.fromCharCode(buffer[i]) // 将 ascII 码 转换为 char
        }
        console.log(chars)
    })
})