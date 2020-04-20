/*
 * @Author: your name
 * @Date: 2020-04-20 23:47:33
 * @LastEditTime: 2020-04-21 00:37:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nodeTest\httpStudy\TCP\index.js
 */
const net = require('net')
const fs = require('fs')

const server = net.createServer(function(socket) {
    console.log('connect');
    const address = server.address();
    socket.write(JSON.stringify(address), function() {
        const size = socket.bytesWritten;
        console.log(size)
    })
    server.maxConnections = 3;
    server.getConnections((err, count) => {
        console.log('客户端人数' + count)
    })
    socket.on('data', function(data) {
       // console.log(data.toString() + '=====' + socket.bytesRead)
        fs.writeFile('./1copy.txt', data, function() {
            console.log('write end')
        })
    })
})

server.listen(11800, function(socket) {
    console.log('11800')
})