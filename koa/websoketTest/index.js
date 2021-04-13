const Koa = require('koa');
const convert = require('koa-convert');
const loggerGenerator = require('./log');
const asyncLog = require('./asyncLog');
// const http = require('http');

const app = new Koa();

app.use(convert(loggerGenerator()));

app.use(asyncLog());

app.use(async(ctx, next) => {
  if (ctx.request.path === '/') {
    ctx.type = 'text/html;charset=utf-8'
    ctx.body = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>MM</title>
        <script src="https://cdn.bootcdn.net/ajax/libs/stomp.js/2.1.0-next/stomp.min.js"></script>
        <script src="https://cdn.bootcdn.net/ajax/libs/sockjs-client/1.5.0/sockjs.js"></script>
        <script type="text/javascript">
          var websocket=new WebSocket('ws://127.0.0.1:30001');
          websocket.onopen = function () {
              console.log("连接成功");
              var from={"serialNo":"xxx","idNo":"xxx"}
              websocket.send(JSON.stringify(from));
          };
          websocket.onmessage = function (evt) {
            var result= evt.data;
            //var data = JSON.parse(evt.data)
            console.log(result);
            ws.close();
          };
          websocket.onclose = function(evt) {
            console.log("Connection closed.");
          }; 
        </script>
      </head>
      <body>
      
      </body>
      </html>
    `;
  } else {
      await next();
  }
});

// http.get({
  
// }, (res) => {
//   console.log(res);
// })

app.listen(3000);