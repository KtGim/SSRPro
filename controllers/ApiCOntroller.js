/*
 * @Author: your name
 * @Date: 2020-11-15 15:03:23
 * @LastEditTime: 2020-11-15 15:04:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node001\controllers\ApiCOntroller.js
 */
/*
 * @Author: your name
 * @Date: 2020-11-13 20:42:05
 * @LastEditTime: 2020-11-15 14:57:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node001\controllers\indexContro;er.js
 */
const Controller = require('./Controller');

class ApiController extends Controller{
    constructor(props) {
        super(props)
    }
    actionIndex(ctx) {
        super.log();
        ctx.body = [{
            id: 1,
            data: 'opopopop'
        }];
    }
}

module.exports = ApiController;