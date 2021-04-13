/*
 * @Author: your name
 * @Date: 2020-11-13 20:44:46
 * @LastEditTime: 2020-11-15 15:06:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node001\controllers\index.js
 */
const Router = require('@koa/router');
const router = new Router();
const IndexController = require('./IndexControler');
const ApiController = require('./ApiController');
const indexInstance = new IndexController();
const apiInstance = new ApiController();

function initController(app) {
    router.get('/', indexInstance.actionIndex)
    router.get('/api/list   ', apiInstance.actionIndex)
    app.use(router.routes()).use(router.allowedMethods())
}

module.exports = initController