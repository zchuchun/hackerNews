const express = require('express');
const handle = require('./handle');
//创建外置路由
const router = express.Router();


router.get('/',(req,res)=>{//首页
    handle.showIndex(req,res);
})

router.get('/index',(req,res)=>{ //首页
    handle.showIndex1(req,res);
})

router.get('/details',(req,res)=>{//详情页
    handle.showDetails(req,res);
  
})

router.get('/submit',(req,res)=>{//提交页
  handle.showSubmit(req,res);
    
})

router.post('/add',(req,res)=>{//添加页
    handle.showAdd(req,res);
})






module.exports = router;

