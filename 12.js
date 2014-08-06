var http = require('http')
//var fs = require('fs')
//var qs = require('querystring');
var portNumber = Number(process.argv[2])

var server = http.createServer(function (req, res) {
  if (req.method == 'POST') {
  var body = '';
  req.on('data', function (data) {
    body += data;
    // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
    if (body.length > 1e6) { 
      // FLOOD ATTACK OR FAULTY CLIENT, NUKE REQUEST
      request.connection.destroy();
    }
  });
  req.on('end', function () {
    //var POST = qs.parse(body);
    // use POST
	//console.log("aaaa" + POST)
	res.write(body.toString().toUpperCase())
	res.end()
    });
  }
})

server.listen(portNumber)

// solution

var http = require('http')
var map = require('through2-map')

var server = http.createServer(function (req, res) {
  if (req.method != 'POST')
    return res.end('send me a POST\n')

  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(res)
})

server.listen(Number(process.argv[2]))
