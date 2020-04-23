/*
 * @Author: your name
 * @Date: 2020-04-23 23:17:34
 * @LastEditTime: 2020-04-23 23:32:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nodeTest\MySql\demo01.js
 */
const mysql = require('mysql')
const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'qjj123456'
})

connection.connect((err) => {
    if(!err) {
        console.log('connected: ' + connection.threadId)
    } else {
        console.log(err)
    }
})