var http = require('http');
var bl = require('bl');

// data should return via callback = function(err, data)
function getRequest(url, callback) {
  http.get(url, function(res) {
    res.pipe(bl(function(error, data) {
    callback(error, data);
  }))
}).on('error', function(e) {
  callback(error);
  });
}

// npm install async
var async = require('async');

async.map(process.argv.slice(2), getRequest, function (err, data_array) {
  data_array.forEach( function (data, i) {
    console.log(data.toString('utf8'));
  });
})

// solution

var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
  for (var i = 0; i < 3; i++)
    console.log(results[i])
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err)

      results[index] = data.toString()
      count++

      if (count == 3) // yay! we are the last one!
        printResults()
    }))
  })
}

for (var i = 0; i < 3; i++)
  httpGet(i)
