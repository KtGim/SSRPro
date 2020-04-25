/*
 * @Author: your name
 * @Date: 2020-04-25 15:25:03
 * @LastEditTime: 2020-04-25 15:27:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nodeTest\Mocha\index.js
 */
function add() {
    if(arguments.length) {
        return [].slice.call(arguments).reduce((a, b) => a + b)
    } else {
        return 0
    }
}

module.exports = {
    add,
}