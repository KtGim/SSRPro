/*
 * @Author: your name
 * @Date: 2020-04-19 19:41:50
 * @LastEditTime: 2020-04-19 20:04:34
 * @LastEditors: Please set LastEditors
 * @Description: url module
 * @FilePath: \nodeTest\httpStudy\url\demo01.js
 */
const url = require('url')
const querystring = require('querystring')
const util = require('util')
const path = require('path')
const dns = require('dns')

const parseUrl = 'http://hhhh.com?l=ooo&name=oo'

console.log(url.parse(parseUrl));
console.log(url.resolve('http://sss.com', 'ppp'))

console.log(querystring.stringify({name: 'ppp', key: 'ppp'}))
console.log(querystring.parse('name=ppp&key=ppp'))

console.log(typeof util.inspect({key: 'ppp', name: 'ooo'}),{ color: true})

console.log(path.parse('E:\\SSRPro\\nodeTest\\httpStudy\\url.js'))
console.log(path.parse(__dirname))

dns.resolve('baidu.com',(err, address) => {
    console.log(address)
})