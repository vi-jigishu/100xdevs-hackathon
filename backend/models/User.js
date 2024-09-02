const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  publicKey: { type: String, required: true },
  proposals: { type: [String], default: [] },
});

module.exports = mongoose.model('User', UserSchema);
