const path = require('path');
const db = require('./db');
module.exports = {
    showIndex(req,res){
        db.findAllData(db,data=>{
            data.reverse();
            res.render('index.html',{list:data});
        });
    },
    showIndex1(req,res){
        res.redirect('/');
    },
    showDetails(req,res){
        id  = req.query.id;
        console.log(id);
        db.findOneData(db,data=>{
            res.render('details.html',data[0]);
        });
    },
    showSubmit(req,res){
      
        res.sendFile(path.join(__dirname,'pages','submit.html'));
    },
    showAdd(req,res){
        db.addData(req,db,()=>{
            res.redirect('/index');
        });
    }
}

