/*
 * @Author: your name
 * @Date: 2020-04-19 21:46:03
 * @LastEditTime: 2020-04-19 21:56:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SSRPro\nodeTest\fsDir\createTxt.js
 */
const fs = require('fs')
const path = './txts/create01.js';

fs.open(path, 'w', (err, data) => {
    console.log(data, '===')
    if (err) return
    fs.writeFile(path, "import React from 'react'", (err, da)=>{
        console.log('sss')
    });
})