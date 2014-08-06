var net = require('net')
var portNumber = process.argv[2]

var server = net.createServer(function (socket) {
  // socket handling logic
  var date = new Date(); 
  //console.log("aaaa "+date.getTimezoneOffset());
  date.setHours(date.getHours() - date.getTimezoneOffset() / 60);
  socket.write(date.toISOString().substring(0,16).replace("T"," "));
  socket.end();
})

server.listen(portNumber)


// solution
var net = require('net')

function zeroFill(i) {
  return (i < 10 ? '0' : '') + i
}

function now () {
  var d = new Date()
    return d.getFullYear() + '-'
           + zeroFill(d.getMonth() + 1) + '-'
           + zeroFill(d.getDate()) + ' '
           + zeroFill(d.getHours()) + ':'
           + zeroFill(d.getMinutes())
}
  
var server = net.createServer(function (socket) {
  socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))
