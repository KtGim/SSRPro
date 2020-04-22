/*
 * @Author: your name
 * @Date: 2020-04-21 23:49:22
 * @LastEditTime: 2020-04-22 00:01:10
 * @LastEditors: Please set LastEditors
 * @Description: 通过请求的路由来获取相应的文件，返回给浏览器
 * @FilePath: \nodeTest\httpDir\urlReq.js
 */
const http = require('http')
const fs = require('fs')
const url = require('url')
const path = require('path')
const mime = require('./static/mime')

const server = http.createServer(function(req, res) {
    let filePath = './urlReqDir/' + url.parse(req.url).pathname;
    if(filePath === './') {
        filePath = './urlReqDir/index.html';
    }
    fs.exists(filePath, (exist) => {
        if(exist) {
            const data = fs.readFileSync(filePath);
            res.writeHead(200, {
                'content-type': mime[path.extname(filePath)]
            })
            res.write(data)
            res.end();
        } else {
            res.end('404')
        }
    })
})

server.listen(3000, function() {
    console.log('3000 is starting')
})