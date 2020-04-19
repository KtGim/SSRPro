/*
 * @Author: your name
 * @Date: 2020-04-19 19:05:49
 * @LastEditTime: 2020-04-19 19:12:33
 * @LastEditors: Please set LastEditors
 * @Description: 学习http模块
 * @FilePath: \nodeTest\httpStudy\conceptions\demo01.js
 */
const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHeader(200, {
        contentType: 'text/plain',
    })
    res.end('Heelo Node.js')
})

server.listen(3000, () => {
    console.log('start');
})