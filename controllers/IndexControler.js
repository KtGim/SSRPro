/*
 * @Author: your name
 * @Date: 2020-11-13 20:42:05
 * @LastEditTime: 2020-11-18 07:27:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node001\controllers\indexContro;er.js
 */
const Controller = require('./Controller');

class IndexController extends Controller{
    constructor(props) {
        super(props)
    }
    async actionIndex(ctx) {
        // throw new Error('自定义错误');
        super.log('打开首页页面');
        ctx.body = await ctx.render('index');
    }
}

module.exports = IndexController;