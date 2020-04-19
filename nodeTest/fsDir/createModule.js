/*
 * @Author: your name
 * @Date: 2020-04-19 22:27:34
 * @LastEditTime: 2020-04-19 22:38:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \SSRPro\nodeTest\fsDir\createModule.js
 */
const fs = require('fs')

const path = './modulecreate/test.txt';

function findAndCreate() {
    const modulePath = path.slice(0, path.lastIndexOf('/'))
    fs.exists(path, (err) => {
        if (!err) {
            fs.mkdir(modulePath,() => {
                console.log('创建文件夹' + modulePath)
                fs.open(path, 'w', (err, fd) => {
                    fs.writeFile(path, '我好像喜欢上你了', () => {
                        console.log('写入文件内容')
                    })
                })
            })
        }
    })
}

findAndCreate()
