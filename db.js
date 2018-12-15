const mongodb = require('mongodb');

module.exports = {
    findAllData(db,callback){
        condb(db=>{
            db.find().toArray((err,data)=>{
                if(err){
                    return console.log('数据查找失败',err);
                }
                console.log(data);
                callback && callback(data);
            })
            
        })
    },
    findOneData(db,callback){
        id = new mongodb.ObjectId(id);
        condb(db=>{
            db.find({_id:id}).toArray((err,data)=>{
                if(err){
                    return console.log('数据查找失败');
                }
                console.log(data);
               callback && callback(data);
               
            })
        })
    },
    addData(req,db,callback){
        condb(db=>{
            console.log(req.body);
            db.insertOne(req.body);
            callback && callback();
        })
    }
}


// 封装读取数据库数据

function condb(callback){
    //得到一个客户端
    const mongoClient = mongodb.MongoClient;
    //指定要连接的数据库地址
    const str = 'mongodb://127.0.0.1:27017';
    //通过客户端连接上数据库
    mongoClient.connect(str,(err,client)=>{
        if(err){
            return console.log('数据库连接失败',err);
        }
        let db = client.db('hackerNews').collection('list');
        console.log('数据库连接成功了');
       
        callback && callback(db);

        client.close();
    })
}