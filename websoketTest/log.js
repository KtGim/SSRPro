function log(ctx) {
  console.log(ctx.method, ctx.header.host + ctx.url, 'generator');
}

module.exports = function() {
  return function *(next) {
    //  执行中间件操作
    log(this);

    if(next) {
      yield next
    }
  }
}