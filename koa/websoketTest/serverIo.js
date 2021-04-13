// var io = require('socket.io')();

// io.on('connection', function(socket) {
//    //接受消息
//    socket.on('message', function (msg) {
//        console.log('receive messge : ' + msg );
//    });
   
//    //发送消息
//    socket.emit('message', 'hello');
   
//    //断开连接回调
//    socket.on('disconnect', function () { 
//        console.log('socket disconnect');
//    });
// });
// io.listen(30001);
const http = require('http');

const server = http.createServer((res, resp) => {
  console.log('ppp');
});

var WebSocket = require('ws');
var wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws) {
    ws.send('连接成功, 后端回调');
    ws.on('message', function incoming(data) {
        /**
         * 把消息发送到所有的客户端
         * wss.clients获取所有链接的客户端
         */
        console.log('io');
        wss.clients.forEach(function each(client) {
            client.send(data);
        });
    });
});

wss.close((err) => {
  console.log(err , '关闭')
})

server.listen(30001, function listening() {
    console.log('服务器启动成功！');
});