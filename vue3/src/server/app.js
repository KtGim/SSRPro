const Koa = require('koa');
const StaticServer = require('koa-static');
const {
  resolve
} = require('path');

const app = new Koa();

const router = require('./router');

router(app);

app.use(StaticServer(resolve(__dirname, '../../dist')));

app.listen(5000,() => {
  console.log('server is running')
})