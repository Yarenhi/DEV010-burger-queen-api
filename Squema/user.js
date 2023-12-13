const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: Number,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ['admin', 'waiter', 'chef']
  }
});

module.exports = mongoose.model('User', userSchema);