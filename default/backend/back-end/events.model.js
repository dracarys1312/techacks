const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Event = new Schema({
  event_lat: {
    type: Float
  },
  event_long: {
    type: Float
  },
  event_name : {
    type: String
  },
  event_time: {
    type: Date
  },
  event_address: {
    type: String
  },
  event_generalInfo: {
    type: String
  },
  event_type: {
    type: String
  },
  event_organizer: {
    type: String
  },
  event_registration_link: {
    type: String
  },
  event_virtual: {
    type: String
  }
});


module.exports = mongoose.model('Event', Event);
