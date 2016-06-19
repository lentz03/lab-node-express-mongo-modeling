var mongoose = require ('mongoose');

var passengerSchema = new mongoose.Schema ({
  firstName: String,
  lastName: String,
  dob: Date
});

var Passenger = mongoose.model("User", passengerSchema);

module.exports = Passenger;

