const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');
const app = express();

//设置模板
app.engine('html',require('express-art-template'));
//设置模板目录
app.set('views','pages');

// 给req.body赋值
app.use(bodyParser.urlencoded());
//静态资源托管
app.use('/assets',express.static('assets'));
app.use(router);
app.listen(9999,()=>console.log('http://localhost:9999    服务器已经开启'));
