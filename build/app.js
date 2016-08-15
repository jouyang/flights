var http = require('http');
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello World, Welcome to flights\n');
}).listen(8080, '107.170.230.178');
console.log('Server running at http://107.170.230.178:8080/');
