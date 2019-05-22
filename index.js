var http = require('http')

var requestListener = function (request, response) {
  console.log('A request came in!!!', request.url)
  response.end('Hello world?')
}

var server = http.createServer(requestListener)

server.listen(3000)