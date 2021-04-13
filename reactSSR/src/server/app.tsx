import React from 'react';
const koa = require('koa');
const app = new koa();

const Router = require('@koa/router');

const router = new Router();

const { renderToString } = require('react-dom/server');

import { StaticRouter as SRouter, matchPath} from 'react-router-dom';

import App from '../shared/App';

import routers from '../shared/Routers';

const server = require('koa-static');

import {
  Provider
} from 'react-redux';


import {
  serverStore
} from '../shared/store'


router.get(['/', '/about'], async (ctx, next) => {
  const promises = [];
  const store = serverStore();
  routers.some(r => {
    const match = matchPath(ctx.req.url, r);
    if (match && r.loadData) {
      promises.push(r.loadData(store));
    }
  })
  let html = '';
  await Promise.all(promises).then(data => {

    console.log(data)

    html = renderToString(
      <Provider store={store}>
        <SRouter location={ctx.req.url}><App /></SRouter>
      </Provider>
    )
  })

  ctx.body = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>React SSR</title>
    </head>
    <body>
      <div id="root">${html}</div>
      <script>window.__init_state=${JSON.stringify(store.getState())}</script>
      <script src="bundle.js"></script>
    </body>
    </html>
  `
})

router.get('/getData', ctx => {
  ctx.body = {
    code: 0,
    message: '',
    data: '后端返回的数据'
  }
})

app.use(server('asserts'));
app.use(router.routes()).use(router.allowedMethods())

app.listen(3005, () => {
  console.log('server is running');
})