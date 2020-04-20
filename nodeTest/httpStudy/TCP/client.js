/*
 * @Author: your name
 * @Date: 2020-04-21 00:11:02
 * @LastEditTime: 2020-04-21 00:39:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nodeTest\httpStudy\TCP\client.js
 */
const net = require('net')
const fs = require('fs')

const client = net.Socket();

client.connect(11800, '127.0.0.1', function() {
    console.log('connect serve')
    // fs.open('./1.txt', 'w', (err, fd) => {
    //     const readBuffer = new Buffer.alloc(1024);
    //     fs.read(fd, readBuffer, 0, 1000, 0, (err, bytesRead) => {
    //         client.write(readBuffer);
    //     })
    // })
    fs.readFile('./1.txt', 'utf-8', (err, data) => {
        client.write(data);
    })
    // client.write('message from client')
})

client.on('data', function(data) {
    console.log('Server Data is' + data.toString());
})

client.on('end', function() {
    console.log('data end')
})