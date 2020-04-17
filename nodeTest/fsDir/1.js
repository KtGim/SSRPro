const fs = require('fs')
// node file arg1 arg2
const arguments = process.argv.splice(2);

console.log(arguments);

const [oriFilePath, targetFilePath] = arguments;

fs.rename(oriFilePath, targetFilePath, (err) => {
    if(err) return
    console.log('ooook');
    fs.stat(targetFilePath, (err, stats) => {
    if (err) throw err;
        console.log(`文件属性: ${JSON.stringify(stats)}`);
    });
})

console.log('异步');