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
  var key = (url.parse(req.headers.referer).pathname).replace(new RegExp('/', 'g'), '')
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

var port = process.env.PORT || '3000' ;
var server = http.createServer(app);

https.createServer(options, app).listen(port + 443);
console.log(`http: ${port}\nhttps:${port + 443}`);
module.exports = app;
