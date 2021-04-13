/*
 * @Author: your name
 * @Date: 2020-11-18 07:59:00
 * @LastEditTime: 2020-11-18 08:02:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node001\utils\safeRequest.js
 */
import axios from 'axios';

class SafaRequest {
    static fetch(url) {
        // 保证服务不会被终端
        return new Promise(res => {
            axios(url).then(reso => {
                res(reso.data)
            }).catch(err => {
                res(err)
            })
        })
    }
}

export default SafaRequest;