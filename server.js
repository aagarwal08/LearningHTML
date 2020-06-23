var http = require('http');
var url = require('url');
http.createServer (function  (req, res) {  
    res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	res.setHeader('Access-Control-Allow-Headers', '*');
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    var count= Number(q.count)
        var temp=0;
        for(i=1; i<=count; i++) {
            temp= temp + i;   
        }
    res.end(temp.toString()); 
}).listen(8080); 
