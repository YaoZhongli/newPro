	var http = require("http");
	var fs = require("fs");
	app = http.createServer(function(req,res){
		console.log(req.url);
		if(req.url=="/6666"){
			fs.readFile(__dirname+"/app1_demo.html",function(err,data){
				res.writeHead(200,{"content-Type":"text/html","charset":"utf8"});
				res.end(data);
			});
		}
		else if(req.url="/app1_demo2.html"){
			fs.readFile(__dirname+"/app1_demo2.html",function(err,data){
				res.writeHead(200,{"content-Type":"text/html","charset":"utf8"});
				res.end(data);
			});
		}
		else if(req.url="/1.jpg"){
			fs.readFile(__dirname+"/1.jpg",function(err,data){
				res.end(data);
			});
			 
		}
	})
	app.listen(8081);
