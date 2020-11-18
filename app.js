/*
 * @Author: your name
 * @Date: 2020-11-13 20:22:17
 * @LastEditTime: 2020-11-18 07:24:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node001\app.js
 */
const koa = require('koa');
const co = require('co')
const log4js = require('log4js');
const app = new koa();
const serve = require('koa-static');


const render = require('koa-swig');
const { historyApiFallback } = require('koa2-connect-history-api-fallback');

log4js.configure({
    appenders: { globalError: { type: "file", filename: "./logs/error.log" } },
    categories: { default: { appenders: ["globalError"], level: "error" } } // error 级别才会写入到文件中
});

const logger = log4js.getLogger("globalError");
// 对应错误级别提示
logger.trace("Entering globalError testing");
logger.debug("Got globalError.");
logger.info("globalError is Comté.");
logger.warn("globalError is quite smelly.");
logger.error("globalError is too ripe!");
logger.fatal("globalError was breeding ground for listeria.");


const config = require('./config');
const initController = require('./controllers');
const ErrorHandler = require('./middlewares/errorHandler');

// console.log(config);
initController(app);
// app.use(async(ctx) => {
//     ctx.body = "hello word";
// })

app.context.render = co.wrap(render({
    root: config.viewDir,
    // autoescape: true,
    cache: config.cache, // disable, set to false 开发环境不需要，线上环境需要开启
    ext: 'html',
    varControls: ['[[', ']]']
    // locals: locals,
    // filters: filters,
    // tags: tags,
    // extensions: extensions
}));

app.use(serve(config.staticDir));
app.use(historyApiFallback({ index: '/', whiteList: ['/api'] }));
ErrorHandler.error(app, logger);

app.listen(config.port, () => {
    console.log(`start at ${config.port}`)
})