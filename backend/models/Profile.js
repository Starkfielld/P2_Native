// models/Profile.js

const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  bio: String,
  profilePicture: String,
});

module.exports = mongoose.model('Profile', profileSchema);
