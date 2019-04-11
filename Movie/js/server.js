var MongoClient = require("C:/Program Files/nodejs/node_modules/mongodb").MongoClient;
var assert = require('assert')//做错误调试的工具(必须引入).低版本的mongo不用引入
var url1 = "mongodb://localhost:27017/test";

var express = require("C:/Program Files/nodejs/node_modules/express");
var request = require("C:/Program Files/nodejs/node_modules/request");
var app = new express();
app.listen(8888);
app.use(express.static(__dirname));
/*app.use(function(req,res){
	console.log(req.url);
	request("https://api.douban.com"+req.url,function(err,res1,data){
		console.log(data)
		var data1 = JSON.parse(data);
		data1.showType="1";
		MongoClient.connect(url1,function(err,dbClient){
			console.log("数据库连接成功");
			var db = dbClient.db("dianying");
			db.collection('jijiang').insertOne(data1,function(err,result){
				if(err){console.log(err)}
				else{
					console.log("写入成功");
					dbClient.close();
				}
			})
		})
		//console.log(data1)
		res.send(JSON.stringify(data1));
	})
})*/

app.use(function(req,res,next){
	var dt = new Date();
	var datastr = dt.getFullYear()+"/"+(dt.getMonth()+1)+"/"+dt.getDate()+"     "+dt.getHours()+":"+dt.getMinutes()+":"+dt.getSeconds();
	console.log(req.ip+"///"+datastr);
	next();
})
//电影接口
app.get("/films",function(req,res){
	console.log(req.query.showType);
	if(!req.query.showType||req.query.showType=="1"){
		console.log(111)
		MongoClient.connect(url1,function(err,dbClient){
			console.log("数据库连接成功");
			var db = dbClient.db("dianying");
			console.log(req.query)
			var docs = db.collection("movies").find();
			var flag=true
			docs.each(function(err,doc){
				if(!err&&doc!==null&&typeof doc=="object"){
					flag = false;
					res.send(doc);
					dbClient.close()
				}else if(doc == null&&flag){
					console.log("未找到数据");
				}
			})
		})
	}else if(req.query.showType == "2"){
		MongoClient.connect(url1,function(err,dbClient){
			console.log("数据库连接成功");
			var db = dbClient.db("dianying");
			console.log(req.query)
			var docs = db.collection("jijiang").find(req.query);
			var flag=true
			docs.each(function(err,doc){
				console.log(doc)
				if(!err&&doc!==null){
					flag = false;
					res.send(doc);
					dbClient.close()
				}else if(doc == null&&flag){
					console.log("未找到数据");
				}
			})
		})
	}else if(req.query.showType == "3"){
		res.send("333")
	}
})
//影院接口
app.get("/cinemas",function(req,res){

})
//榜单接口
app.get("/board",function(req,res){
    console.log(req.query.showBoard);
	if(!req.query.showBoard||req.query.showBoard=="1"){
		res.send("111")
	}else if(req.query.showBoard == "2"){
		res.send("222")
	}else if(req.query.showBoard == "3"){
		res.send("333")
	}else if(req.query.showBoard == "4"){
		res.send("444")
	}else if(req.query.showBoard == "5"){
		MongoClient.connect(url1,function(err,dbClient){
			console.log("数据库连接成功");
			var db = dbClient.db("dianying");
			var docs = db.collection("board").find(req.query);
			var flag=true
			docs.each(function(err,doc){
				if(!err&&doc!==null){
					flag = false;
					res.send(doc);
					dbClient.close()
				}else if(doc == null&&flag){
					console.log("未找到数据");
				}
			})
		})
	}
})
//热点接口
app.get("/news",function(req,res){
	showBoard
})
/*app.use(function(req,res){
	console.log(req.url);
	request("https://api.douban.com"+req.url,function(err,res1,data){
		res.send(data)
	})
})*/