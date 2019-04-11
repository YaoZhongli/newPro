var http = require("http");
var fs = require("fs");
http.createServer(function(req, res){
	console.log(req.url);
	if(req.url == "/favicon.ico"){
		res.end();
		return;
	}

	function fn(anypath) {
		fs.stat(__dirname+anypath,function(err,status) {
			if(err){console.log("网址错误"); res.end(); return}
			if(status.isFile()) {
				fs.readFile(__dirname+anypath,function(err, data) {
					res.end(data);
				});
			} else {
				fs.readdir(__dirname+anypath, function(err, filenames) {
					res.write("<html>");
					res.write("<body>");
					for(let i = 0; i < filenames.length; i++) {
						res.write("<a href='"+anypath+"/"+filenames[i]+"'>"+filenames[i]+"</a><br/>")
//						res.write("[<a href='"+anypath+"+"/"+"+filenames[i]+"'>");
//						res.write(filenames[i]);
//						res.write("</a>]<br>");
					}
					res.write("</body>");
					res.write("</html>");
					res.end();
				});

			}
		});
	}
	fn(req.url);

}).listen(8081);