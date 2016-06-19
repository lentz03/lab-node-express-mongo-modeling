var mongoose = require('mongoose');

var TerminalSchema = new mongoose.Schema({
  name:           String,
  capacity:       Number,
  flights:        [{ type: mongoose.Schema.ObjectId, ref: 'Flight' }]
});

var Terminal = mongoose.model('Terminal', TerminalSchema);

module.exports = Terminal;