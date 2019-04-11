	var http = require("http");
	var fs = require("fs");
	app = http.createServer(function(req,res){
		console.log(req.url);
		if(req.url=="/index.html"||req.url =="/"){
			fs.readFile(__dirname+"/html/index.html",function(err,data){
				res.writeHead(200,{"content-Type":"text/html,charset:utf8"});
				res.end(data);
			});
		}
		
		else if(req.url=="/img/logo.png"){
			fs.readFile(__dirname+"/img/logo.png",function(err,data){
				res.writeHead(200,{"content-Type":"image/png;charset:utf8"});
				res.end(data);
			});
		}
		else if(req.url=="/img/favicon.ico"){
			fs.readFile(__dirname+"/img/favicon.ico",function(err,data){
				res.writeHead(200,{"content-Type":"image/png;charset:utf8"});
				res.end(data);
			});
		}
		
		else if(req.url=="/img/newtag.gif"){
			fs.readFile(__dirname+"/img/newtag.gif",function(err,data){
				res.writeHead(200,{"content-Type":"image/png;charset:utf8"});
				res.end(data);
			});
		}
		else if(req.url=="/img/dijia.gif"){
			fs.readFile(__dirname+"/img/dijia.gif",function(err,data){
				res.writeHead(200,{"content-Type":"image/png;charset:utf8"});
				res.end(data);
			});
		}
		else if(req.url=="/img/place_chengdu.jpg"){
			fs.readFile(__dirname+"/img/place_chengdu.jpg",function(err,data){
				res.writeHead(200,{"content-Type":"image/png;charset:utf8"});
				res.end(data);
			});
		}
		else if(req.url=="/img/sowingmap1.jpg"){
			fs.readFile(__dirname+"/img/sowingmap1.jpg",function(err,data){
				res.writeHead(200,{"content-Type":"image/png;charset:utf8"});
				res.end(data);
			});
		}
		else if(req.url=="/img/i_qbox.png"){
			fs.readFile(__dirname+"/img/i_qbox.png",function(err,data){
				res.writeHead(200,{"content-Type":"image/png;charset:utf8"});
				res.end(data);
			});
		}
		else if(req.url=="/img/sowingmap2.jpg"){
			fs.readFile(__dirname+"/img/sowingmap2.jpg",function(err,data){
				res.writeHead(200,{"content-Type":"image/png;charset:utf8"});
				res.end(data);
			});
		}
		else if(req.url=="/img/sowingmap3.jpg"){
			fs.readFile(__dirname+"/img/sowingmap3.jpg",function(err,data){
				res.writeHead(200,{"content-Type":"image/png;charset:utf8"});
				res.end(data); 
			});
		}
		else if(req.url=="/img/sowingmap4.jpg"){
			fs.readFile(__dirname+"/img/sowingmap4.jpg",function(err,data){
				res.writeHead(200,{"content-Type":"image/png;charset:utf8"});
				res.end(data);
			});
		}
		else if(req.url=="/img/sowingmap5.jpg"){
			fs.readFile(__dirname+"/img/sowingmap5.jpg",function(err,data){
				res.writeHead(200,{"content-Type":"image/png;charset:utf8"});
				res.end(data);
			});
		}
		else if(req.url=="/img/tripplan_pic1.jpg"){
			fs.readFile(__dirname+"/img/tripplan_pic1.jpg",function(err,data){
				res.writeHead(200,{"content-Type":"image/png;charset:utf8"});
				res.end(data);
			});
		}
		else if(req.url=="/img/books01.jpg"){
			fs.readFile(__dirname+"/img/books01.jpg",function(err,data){
				res.writeHead(200,{"content-Type":"image/png;charset:utf8"});
				res.end(data);
			});
		}
		else if(req.url=="/img/book_cover1.jpg"){
			fs.readFile(__dirname+"/img/book_cover1.jpg",function(err,data){
				res.writeHead(200,{"content-Type":"image/png;charset:utf8"});
				res.end(data);
			});
		}
		else if(req.url=="/img/book_cover2.jpg"){
			fs.readFile(__dirname+"/img/book_cover2.jpg",function(err,data){
				res.writeHead(200,{"content-Type":"image/png;charset:utf8"});
				res.end(data);
			});
		}
		else if(req.url=="/img/book_cover3.jpg"){
			fs.readFile(__dirname+"/img/book_cover3.jpg",function(err,data){
				res.writeHead(200,{"content-Type":"image/png;charset:utf8"});
				res.end(data);
			});
		}
		else if(req.url=="/img/app_footer.jpg"){
			fs.readFile(__dirname+"/img/app_footer.jpg",function(err,data){
				res.writeHead(200,{"content-Type":"image/png;charset:utf8"});
				res.end(data);
			});
		}
		else if(req.url=="/img/footer1.gif"){
			fs.readFile(__dirname+"/img/footer1.gif",function(err,data){
				res.writeHead(200,{"content-Type":"image/png;charset:utf8"});
				res.end(data);
			});
		}
		else if(req.url=="/img/footer2.png"){
			fs.readFile(__dirname+"/img/footer2.png",function(err,data){
				res.writeHead(200,{"content-Type":"image/png;charset:utf8"});
				res.end(data);
			});
		}
		else if(req.url=="/img/footer3.png"){
			fs.readFile(__dirname+"/img/footer3.png",function(err,data){
				res.writeHead(200,{"content-Type":"image/png;charset:utf8"});
				res.end(data);
			});
		}
		else if(req.url=="/img/footer4.png"){
			fs.readFile(__dirname+"/img/footer4.png",function(err,data){
				res.writeHead(200,{"content-Type":"image/png;charset:utf8"});
				res.end(data);
			});
		}
		else if(req.url=="/img/footer5.png"){
			fs.readFile(__dirname+"/img/footer5.png",function(err,data){
				res.writeHead(200,{"content-Type":"image/png;charset:utf8"});
				res.end(data);
			});
		}
		else if(req.url=="/img/i_qbox.png"){
			fs.readFile(__dirname+"/img/i_qbox.png",function(err,data){
				res.writeHead(200,{"content-Type":"image/png;charset:utf8"});
				res.end(data);
			});
		}
		else if(req.url=="/img/favicon.ico"){
			fs.readFile(__dirname+"/img/favicon.ico",function(err,data){
				res.writeHead(200,{"content-Type":"image/png;charset:utf8"});
				res.end(data);
			});
		}
		else if(req.url=="/css/index.css"){
			fs.readFile(__dirname+"/css/index.css",function(err,data){
				res.writeHead(200,{"content-Type":"text/css;charset:utf8"});
				res.end(data);
			});
		}
		
	})
	app.listen(8081);