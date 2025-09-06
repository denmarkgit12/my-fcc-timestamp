// index.js
// where your node app starts

// init project
<<<<<<< HEAD
require('dotenv').config();
=======
>>>>>>> d028f088892f79a9ee15c346b39143d9b0a39f95
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
<<<<<<< HEAD
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204
=======
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204
>>>>>>> d028f088892f79a9ee15c346b39143d9b0a39f95

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
<<<<<<< HEAD
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

app.get("/api/whoami", (req, res) => {
  const ipaddress = req.headers["x-forwarded-for"] || req.ip;
  const language = req.headers["accept-language"];
  const software = req.headers["user-agent"];

  res.json({
    ipadress: ipaddress,
    language: language,
    software: software
  });
});

// listen for requests :)
=======
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

// my code

app.get('/api/:date?', (req,res) => {
  const {date: dateParams} = req.params;
  const dateNow = new Date();
  if(!dateParams) return res.json({unix: dateNow.getTime(), utc: dateNow.toUTCString()});

 const date = !isNaN(dateParams)
    ? new Date(parseInt(dateParams))
    : new Date(dateParams);
  
  if (date.toString() === "Invalid Date") {
    return res.json({ error: "Invalid Date" });
  }
  return res.json({
    unix: date.getTime(),
    utc: date.toUTCString(),
  });

})



// Listen on port set in environment variable or default to 3000
>>>>>>> d028f088892f79a9ee15c346b39143d9b0a39f95
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
