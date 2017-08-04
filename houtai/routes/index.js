var express = require('express');
var router = express.Router();
var https = require("https");
var async = require("async");
var MongoClient = require("mongodb").MongoClient;
var DB_CONN_STR = "mongodb://127.0.0.1:27017/vue";

router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// http://localhost:3000/getAddress   获取首页头部热门搜索数据
router.get('/getAddress', function(req, res, next) {
  	https.get("https://mainsite-restapi.ele.me/bgs/poi/reverse_geo_coding?latitude=22.58741&longitude=113.98036",function(response){
  		var html = "";
  		response.on("data",function(chunk){
  			html+=chunk;
  		})
  		response.on("end",function(){
  			res.send(html);
  		})
  	})
});

// http://localhost:3000/getTianQi   获取首页天气数据
router.get('/getTianQi', function(req, res, next) {
  	https.get("https://mainsite-restapi.ele.me/bgs/weather/current?latitude=22.58741&longitude=113.98036",function(response){
  		var html = "";
  		response.on("data",function(chunk){
  			html+=chunk;
  		})
  		response.on("end",function(){
  			res.send(html);
  		})
  	})
});

// http://localhost:3000/hotSearch   获取首页头部热门搜索数据
router.get('/getHotSearch', function(req, res, next) {
    // https://mainsite-restapi.ele.me/shopping/restaurants?latitude=22.58329920000001&longitude=113.9569964&offset=20&limit=20&extras[]=activities&terminal=h5
  	https.get("https://mainsite-restapi.ele.me/shopping/v3/hot_search_words?latitude=22.58741&longitude=113.98036",function(response){
  		var html = "";
  		response.on("data",function(chunk){
  			html+=chunk;
  		})
  		response.on("end",function(){
  			res.send(html);
  		})
  	})
});

// http://localhost:3000/getShopList   获取首页列表数据
router.get('/getShopList', function(req, res, next) {
    // https://mainsite-restapi.ele.me/shopping/restaurants?latitude=22.58329920000001&longitude=113.9569964&offset=20&limit=20&extras[]=activities&terminal=h5
  	https.get("https://mainsite-restapi.ele.me/shopping/restaurants?latitude=22.58329920000001&longitude=113.9569964&offset=20&limit=20&extras[]=activities&terminal=h5",function(response){
  		var html = "";
  		response.on("data",function(chunk){
  			html+=chunk;
  		})

  		response.on("end",function(){
  			res.send(html);
  		})
  	})
});

// http://localhost:3000/getShopList   获取首页列表加载更多数据
router.get('/loadMore', function(req, res, next) {
	var offset= req.query.offset;
	var limit= req.query.limit;
    // https://mainsite-restapi.ele.me/shopping/restaurants?latitude=22.58329920000001&longitude=113.9569964&offset=20&limit=20&extras[]=activities&terminal=h5
  	https.get("https://mainsite-restapi.ele.me/shopping/restaurants?latitude=22.54286&longitude=114.059563&offset="+offset+"&limit="+limit+"&extras[]=activities&terminal=h5",function(response){
  		var html = "";
  		response.on("data",function(chunk){
  			html+=chunk;
  		})

  		response.on("end",function(){
  			res.send(html);
  		})
  	})
});

// http://localhost:3000/getMenuData   获取菜单栏数据--头部
router.get('/getMenuData', function(req, res, next) {
	var id = req.query.id;
	// https://mainsite-restapi.ele.me/shopping/restaurant/1383166?extras[]=activities&extras[]=albums&extras[]=license&extras[]=identification&latitude=22.58846&longitude=113.97459
	var url = "https://mainsite-restapi.ele.me/shopping/restaurant/"+id+"?extras[]=activities&extras[]=albums&extras[]=license&extras[]=identification&latitude=22.54286&longitude=114.059563"
	// console.log(id);
  	https.get(url,function(response){
  		var html = "";
  		response.on("data",function(chunk){
  			html+=chunk;
  		})

  		response.on("end",function(){
  			res.send(html);
  		})
  	})
});


// http://localhost:3000/getMenuData   获取菜单栏数据--列表
router.get('/getMenuList', function(req, res, next) {
	var id = req.query.id;
	var url = 'https://mainsite-restapi.ele.me/shopping/v2/menu?restaurant_id='+id;
	// console.log(id);
  	https.get(url,function(response){
  		var html = "";
  		response.on("data",function(chunk){
  			html+=chunk;
  		})

  		response.on("end",function(){
  			res.send(html);
  		})
  	})
});

// http://localhost:3000/getScore   获取评价列表头部星数=
router.get('/getScore', function(req, res, next) {
	var id = req.query.id;
	var url = 'https://mainsite-restapi.ele.me/ugc/v2/restaurants/'+id+'/ratings/scores';
	// console.log(id);
  	https.get(url,function(response){
  		var html = "";
  		response.on("data",function(chunk){
  			html+=chunk;
  		})

  		response.on("end",function(){
  			res.send(html);
  		})
  	})
});
// http://localhost:3000/getRating   获取评价列表--满意等级
router.get('/getRating', function(req, res, next) {
	var id = req.query.id;
	var url = 'https://mainsite-restapi.ele.me/ugc/v2/restaurants/'+id+'/ratings/tags';
	// console.log(id);
  	https.get(url,function(response){
  		var html = "";
  		response.on("data",function(chunk){
  			html+=chunk;
  		})

  		response.on("end",function(){
  			res.send(html);
  		})
  	})
});
// http://localhost:3000/getPingJiaList    获取评价列表--用户评价列表
router.get('/getPingJiaList', function(req, res, next) {
	var id = req.query.id;
	var url = 'https://mainsite-restapi.ele.me/ugc/v2/restaurants/'+id+'/ratings?has_content=true&offset=0&limit=10';
	// console.log(id);
  	https.get(url,function(response){
  		var html = "";
  		response.on("data",function(chunk){
  			html+=chunk;
  		})

  		response.on("end",function(){
  			res.send(html);
  		})
  	})
});


//轮播图信息
router.get('/getNav', function(req, res, next) {
  	https.get("https://mainsite-restapi.ele.me/shopping/v2/entries?latitude=22.58846&longitude=113.97459&templates[]=main_template",function(response){
  		var html = "";
  		response.on("data",function(chunk){
  			html+=chunk;
  		})
  		response.on("end",function(){
  			res.send(html);
  		})
  	})
});

//获取轮播图的详情页路由
router.get('/getNavlist', function(req, res, next) {
  	https.get("https://mainsite-restapi.ele.me/shopping/restaurants?latitude=22.533012&longitude=113.930475&keyword=&offset=0&limit=20&extras[]=activities&restaurant_category_ids[]=209&restaurant_category_ids[]=211&restaurant_category_ids[]=212&restaurant_category_ids[]=213&restaurant_category_ids[]=214&restaurant_category_ids[]=215&restaurant_category_ids[]=216&restaurant_category_ids[]=217&restaurant_category_ids[]=218&restaurant_category_ids[]=219&restaurant_category_ids[]=221&restaurant_category_ids[]=222&restaurant_category_ids[]=223&restaurant_category_ids[]=224&restaurant_category_ids[]=225&restaurant_category_ids[]=226&restaurant_category_ids[]=227&restaurant_category_ids[]=228&restaurant_category_ids[]=229&restaurant_category_ids[]=230&restaurant_category_ids[]=231&restaurant_category_ids[]=232&restaurant_category_ids[]=234&restaurant_category_ids[]=235&restaurant_category_ids[]=236&restaurant_category_ids[]=237&restaurant_category_ids[]=238&restaurant_category_ids[]=263&restaurant_category_ids[]=264&restaurant_category_ids[]=265&restaurant_category_ids[]=266&restaurant_category_ids[]=267&restaurant_category_ids[]=268&restaurant_category_ids[]=269",function(response){
  		var html = "";
  		response.on("data",function(chunk){
  			html+=chunk;
  		})

  		response.on("end",function(){
  			res.send(html);
  		})
  	})
});





//登陆注册路由
router.get('/mine', function(req, res, next) {
    var user = req.query.user;
    var pass = req.query.pass;
    MongoClient.connect(DB_CONN_STR,function(err,db){
        var conn = db.collection("project");
        
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
