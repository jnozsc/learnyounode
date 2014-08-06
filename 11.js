var http = require('http')
var fs = require('fs')
var portNumber = process.argv[2]
var fileName = process.argv[3]

var server = http.createServer(function (req, res) {
  // request handling logic...
  var stream = fs.createReadStream(fileName)
  stream.pipe(res);
})
server.listen(portNumber)

// solution

var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })

  fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2]))
