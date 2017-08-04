var express = require('express');
var router = express.Router();
var https = require("https");
var async = require("async");
var MongoClient = require("mongodb").MongoClient;
var DB_CONN_STR = "mongodb://127.0.0.1:27017/mt";//这里的mt是我用mongodb创建的数据库


router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

/* GET home page. */
router.get('/mypage', function(req, res, next) {
    var user = req.query.user;
    var pass = req.query.pass;
    MongoClient.connect(DB_CONN_STR,function(err,db){
                             //这里的mt是我用mongodb创建的数据库
        var conn = db.collection("mt");
        async.series([
          function(cb){
              conn.find({name:user}).count(function(err,num){
                if(err){
                    cb("err",{msg:-1,code:"用户名查询失败"});        //用户名查询失败
                }else{
                    if(num>0){      //用户名存在
                        cb(null,{msg:0,code:"用户名存在"});
                    }else{          //用户名存在,直接保存到数据库
                        conn.save({name:user,pass:pass},function(err,data){
                            if(err){
                                cb("err",{msg:-1,code:"数据保存失败"})
                            }else{
                                cb("err",{msg:1,code:"数据保存成功"});
                            }
                        })
                    }
                }
              })
          },
          function(cb){     //顺便判断登录密码是否信息一致
                conn.find({name:user,pass:pass}).count(function(err,count){
                    if(err){
                         cb('err',{msg:-1,code:"用户名及密码查询失败"});
                    }else{
                        if(count>0){        //查到证明用户名及密码输入正确
                            cb(null,{msg:1,code:"登录用户名及密码正确",userName:user})
                        }else{              //反之密码输入错误
                            cb("err",{msg:-1,code:"该账号已存在，但密码输入错误"})
                        }
                    }
                })
          }
        ],function(err,result){
            if(err){
                res.send(result);
            }else{
                res.send(result);
            }
        })
    })
          
});



module.exports = router;
