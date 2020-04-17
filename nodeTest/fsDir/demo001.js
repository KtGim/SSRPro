const fs = require('fs')

console.log(process.cwd());

 fs.open('1.txt', (err, fd) => {
    if (err) return;
    fs.close(fd, (err) => {
        if (err) throw err;
    });
 })