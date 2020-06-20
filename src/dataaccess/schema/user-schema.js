const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const User = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  mobile_no: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: true
  },
  date_of_birth: {
    type: Date,
    required: true
  },
  created_on: {
    type: Date,
    default: Date.now
  },
  updated_on: {
    type: Date,
    default: Date.now
  }
});

const UserModel = mongoose.model("User", User);

module.exports = UserModel;

