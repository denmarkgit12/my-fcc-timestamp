// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

app.get("/api/whoami", (req, res) => {

let ip = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || req.connection?.remoteAddress || req.ip || '';

  // if multiple IPs (comma list), take the first one
  ip = ip.split(',')[0].trim();

  // strip IPv4-mapped IPv6 prefix if present (::ffff:127.0.0.1 -> 127.0.0.1)
  if (ip.startsWith('::ffff:')) ip = ip.replace('::ffff:', '');

  // normalize IPv6 loopback to IPv4 loopback (optional)
  if (ip === '::1') ip = '127.0.0.1';

  const language = req.headers['accept-language'] || '';
  const software = req.headers['user-agent'] || '';

  res.json({
    ipadress: ip,
    language: language,
    software: software
  });
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
