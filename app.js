var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use (bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/airport');

var Passenger = require ('./models/passenger')
var Passenger = require ('./models/airport')
var Passenger = require ('./models/terminal')
var Passenger = require ('./models/flight')

var flight1 = new Flight({
  from:                 "MNL Philippines",
  to:                   "HKG Hong Kong",
  airline:              "Philippines",
  passengers:           []
});

flight1.save();
console.log("flight1 = ", flight1);

var flight2 = new Flight({
  from:                 "SG Singapore",
  to:                   "CEB Cebu",
  airline:              "Cebu Pacific Airways",
  passengers:           []
});

flight2.save();
console.log("flight2 = ", flight2);

var airport1 = new Airport({
  name:           "NAIA 2",
  country:        "PH",
  opened:         ((new Date()).setYear(1995))
});

airport1.terminals.push({
  name:           "Terminal 2",
  capacity:       250000,
  flights:        [flight1, flight2]
});

console.log("airport1 = ", airport1);
console.log("terminals = ", airport1.terminals);
airport1.save();