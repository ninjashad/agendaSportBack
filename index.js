var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

// config files
var configDB = require('./config/database.conf');
var configServ = require('./config/server.conf');

// create express app
var app = express();

//parse request application/json
app.use(bodyParser.json());
//parse request application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//use cors for allow access on requests
app.use(cors());

// run server
app.listen(configServ.port, () => {
  console.log("Server on port " + configServ.port);
});

// connect database
mongoose.connect(configDB.url).then(() => {
  console.log("Connected to the database")
}).catch(err => {
  console.log("Cannot connect to the database. Existing now...")
  process.exit()
});