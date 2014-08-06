var http = require('http')
var portNumber = Number(process.argv[2])

var server = http.createServer(function(req, res) {
  if (req.method == 'GET') {
    var url = require('url');
    var url_parts = url.parse(req.url, true);
    //console.log(url_parts);
    var query = url_parts.query;
    var result = {};
    if (url_parts.pathname == = '/api/parsetime') {
      var date = new Date(query.iso);
      result.hour = date.getHours();
      result.minute = date.getMinutes();
      result.second = date.getSeconds();
    }
    if (url_parts.pathname == = '/api/unixtime') {
      var date = new Date(query.iso);
      result.unixtime = date.getTime();
    }
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.write(JSON.stringify(result))
    res.end()
  }
});

server.listen(portNumber)

// solution
var http = require('http')
var url = require('url')

function parsetime(time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime(time) {
  return { unixtime : time.getTime() }
}

var server = http.createServer(function(req, res) {
  var parsedUrl = url.parse(req.url, true)
  var time = new Date(parsedUrl.query.iso)
  var result

  if ( / ^\ / api\ / parsetime / .test(req.url))
    result = parsetime(time)
  else if ( / ^\ / api\ / unixtime / .test(req.url))
    result = unixtime(time)

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(Number(process.argv[2]))
