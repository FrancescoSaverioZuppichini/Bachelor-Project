var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var proxy = require('express-http-proxy');

var app = express();

const url = require('url')
const axios = require('axios')
const config = require('./config.js');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
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

// TODO DIOCANE PORCODIO
for (let key in config) {
  app.use(`/${key}/api*`, (req, res) => {
    axios({
        method: req.method,
        url: config[key] + req.originalUrl.split(key)[1],
        data: req.body
      })
      .then((data) => {
        res.send(data.data)
      })
      .catch(({ response }) => {
        res.status(response.data.code).send(response.data.message)
      })
  })
}
// set up each proxy entry
for (let key in config) {
  app.use(`/${key}/*`, proxy(config[key], {
    proxyReqPathResolver: (req) => { return config[key] + req.originalUrl.split(key)[1] }
  }))
}


module.exports = app;
