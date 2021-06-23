var http = require('http');
var dt = require('./module');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html',
	});
	res.end('The time and:22 ' + dt.myDateTime());	
}).listen(8089);

