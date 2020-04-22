/*
 * @Author: your name
 * @Date: 2020-04-22 23:47:29
 * @LastEditTime: 2020-04-23 00:20:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nodeTest\mongodbDir\mongooseDB.js
 */
const mongoose = require('mongoose');
//新版 ongodb 需要在connect后面加上 options 参数，否则会有警告
const uri = 'mongodb://localhost:27017/db'

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, function(err) {
    if(err) {
        console.log('has err')
    } else {
        console.log('success')
    }
})

// 定义scame  用来指定 model中的所有属性
const ArticleSchame = new mongoose.Schema({
    title: String,
    author: String,
    content: String,
    publicDate: Date,
})
// 注册model
mongoose.model('Article', ArticleSchame)

//创建表
const Article = mongoose.model('Article');

// 创建表格数据
// const article = new Article({
//     title: 'nodejs',
//     author: 'node',
//     content: 'about nodejs',
//     publicDate: new Date()
// })

// 保存数据
// article.save(function(err) {
//     if(err) {
//         console.log('err')
//     } else {
//         console.log('save success')
//     }
// })

// 查找
// Article.find({title: 'nodejs'},function(err, docs) {
//     console.log(docs);
// })

// 修改   
// Article.findOne({title: 'nodejs'},function(err, docs) {
//     console.log(docs);
//     if(!err) {
//         docs.title = 'js';
//         docs.save({}, () => {
//             Article.find({}, (err, docs) => { console.log(docs)})
//         });
//     }
// })

// Article.find({}, (err, docs) => { console.log(docs)})

