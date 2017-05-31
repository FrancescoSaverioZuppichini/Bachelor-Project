var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs')

var https = require('https');
var http = require('http');

const url = require('url')
const axios = require('axios')
const config = require('./config.js');

var proxy = require('express-http-proxy');

var WebSocketServer = require('websocket').server
var WebSocketClient = require('websocket').client


var app = express();

var options = {}

try {
  options = {
    cert: fs.readFileSync('./sslcert/fullchain.pem'),
    key: fs.readFileSync('./sslcert/privkey.pem')
  }
} catch (err) {

}

var proxy = require('express-http-proxy');

app.use(logger('dev'));

app.use(cookieParser());

// handle the js case
app.use('/js/*', (req, res) => {
  var key  = url.parse(req.headers.referer).pathname.split('/')[1]
  // var key = (url.parse(req.headers.referer).pathname).replace(new RegExp('/', 'g'), '')
  axios.get(config[key] + req.originalUrl)
    .then(data => res.send(data.data))
    .catch(({ response }) => {
      res.status(response.data.code).send(response.data.message)
    })
})

// set up each proxy entry
for (let key in config) {
  app.use(`/${key}/*`, proxy(config[key], {
    proxyReqPathResolver: (req) => { return config[key] + req.originalUrl.split(key)[1] }
  }))
}

var port = process.env.PORT || 3000;
var server = http.createServer(app).listen(port)
// server.listen(port);
var httpsServer = https.createServer(options, app)
httpsServer.listen(port + 443)

// var wsServer = new WebSocketServer({
//   httpServer: [server, httpsServer]
// });
//
// var client = new WebSocketClient();
// client.connect('ws://localhost:8081/ws', null, null, null);
//
// client.on('connect', function(connection) {
//   connection = connection.connected
//   console.log('client connected');
//
//   wsServer.on('request', function connection(request) {
//     var clientConnect = request.accept()
//
//     clientConnect.on('message', function(msg) {
//       console.log(msg);
//       connection.sendUTF(msg.utf8Data)
//     })
//   })
// })


var WebSocketServer = require('ws').Server
var WebSocket = require('ws');

const clientWs = new WebSocket('ws://localhost:8081/ws');

clientWs.on('open', function open() {
  console.log('connected to server');
});

clientWs.on('message', function incoming(data) {
  wss.broadcast(data)
});

wss = new WebSocketServer({ server: httpsServer });

wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};
// set up server
wss.on('connection', function connection(ws) {
  console.log('new connection');
  ws.on('message', function incoming(data) {

    clientWs.send(data)
  });
});



console.log(`http: ${port}\nhttps:${port + 443}`);
module.exports = app;
