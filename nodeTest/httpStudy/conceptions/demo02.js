/*
 * @Author: your name
 * @Date: 2020-04-19 19:20:49
 * @LastEditTime: 2020-04-19 19:37:39
 * @LastEditors: Please set LastEditors
 * @Description: http.request
 * @FilePath: \nodeTest\httpStudy\conceptions\demo02.js
 */
const  http = require('http')
let reqData = ''
// http.get({
//     'host': '0.0.0.0',
//     'port': '3000',
// }, function (res) {
//     res.on('data', function (chunk) {
//         console.log(chunk, '===========chunk')
//         reqData += chunk
//     })
//     res.on('end', function () {
//         console.log(reqData)
//     })
// }).end();
let options = {
    host: '127.0.0.1',
    post: '3000'
}

const req = http.request(options)

req.on('response', function (res) {
    res.on('data', (chunk) =>{
        reqData += chunk
    })
    res.on('end', function() {
        console.log(reqData)
    })
});