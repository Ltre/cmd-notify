//接收消息，加入队列。可设定处理优先级
//读取队列，根据优先级及当前处理进度进行调度
const http = require('http');
const url = require('url');

var srv = http.createServer(function(req, res){
	console.log(req);
	var p = url.parse(req.url);//href,search,query,pathname

	//demo  curl http://127.0.0.1:1234/fdsf/fds/f
	if (p.pathname == '/a/b') {
		res.end(JSON.stringify(p));
		return;
	}

  	res.writeHead(200, {'Content-Type': 'text/plain'});
  	res.end('okay');
});

srv.listen('1234', '127.0.0.1', function(){
	console.log('hehe');
});