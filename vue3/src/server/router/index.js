const Router = require('@koa/router');
const {
  resolve
} = require('path');
const fs = require('fs');
const serverBundle = require('../../../dist/server-bundle.js').default;
const template = fs.readFileSync(resolve(__dirname, '../../../dist/index.html'), 'utf-8');

const {
  renderToString
} = require('@vue/server-renderer')

const router = new Router();

const renderState = (state, windowKey) => {
  return `<script>window.${windowKey}=${JSON.stringify(state)}</script>`
}

module.exports = (app) => {
  const { app: appCom, router: r, store } = serverBundle();

  router.get(['/', '/about'], async (ctx, next) => {
    r.push(ctx.req.url);
    await r.isReady();

    const cr = r.currentRoute.value.matched.map(record => {
      // console.log(record.components);
      return Object.values(record.components)
    })
    // console.log(r.currentRoute.value, cr, store.state);

    let appComponent = await renderToString(appCom);
    appComponent = `
      ${renderState(store.state, '__SERVER_STATE__')}
      <div id="app">
        ${appComponent}
      </div>
    `
    const html = template.replace('<div id="app"></div>', appComponent);
    ctx.body = html;
  })

  // allowMethods 自动处理路由不匹配等异常情况
  app.use(router.routes()).use(router.allowedMethods())
}