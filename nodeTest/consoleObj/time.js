/*
 * @Author: 钱晶晶
 * @Date: 2020-04-17 23:58:50
 * @LastEditTime: 2020-04-19 19:03:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nodeTest\consoleObj\time.js
 */
console.time('oo')

for(var i = 0; i < 100; i++) {
    console.trace(`trace_${i}`) // 输出当前位置的栈信息，参数即是输出的 名称
}

console.timeEnd('oo')