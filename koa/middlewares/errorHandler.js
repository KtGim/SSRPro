/*
 * @Author: your name
 * @Date: 2020-11-15 16:25:57
 * @LastEditTime: 2020-11-18 07:22:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node001\middlewares\errorHandler.js
 */
class ErrorHandler {
    static error(app, logger) {
        app.use(async(ctx, next) => {
            try {
                await next()
            } catch(err) {
                logger.error(err.message)
                ctx.body = "500 请求"
            }
        })
        app.use(async(ctx, next) => {
            await next();
            if(ctx.status === 404) {
                ctx.body = `<script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8" homePageUrl="/" homePageName="阿晶主页"></script>`
            }
        })
    }
}

module.exports = ErrorHandler