/*
 * @Author: your name
 * @Date: 2020-04-21 23:31:07
 * @LastEditTime: 2020-04-21 23:44:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nodeTest\httpDir\readHtml.js
 */
const http = require('http')
const fs = require('fs')

// 创建服务
const server = http.createServer(function(req, res) {
    res.writeHead(200, {
        'content-type': 'text/html;charset:utf-8'  // 解决中文乱码问题
    })

    const data = fs.readFileSync('./static/demo01.html')

    res.write(data)
    res.end()
})

server.listen(3000, function() {
    console.log('listenning on 3000')
})