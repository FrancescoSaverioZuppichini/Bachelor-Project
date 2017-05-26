var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const fs = require('fs')
const https = require('https');
var http = require('http');

var options = {}
try {
  options = {
    cert: fs.readFileSync('./sslcert/fullchain.pem'),
    key: fs.readFileSync('./sslcert/privkey.pem')
  }
} catch (err) {

}

var proxy = require('express-http-proxy');

var app = express();

const url = require('url')
const axios = require('axios')
const config = require('./config.js');

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

var port =process.env.PORT || '3000' ;
app.set('port', 3000);

var server = http.createServer(app).listen(3000);
https.createServer(options, app).listen(3443);

module.exports = app;
