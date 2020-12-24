const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true, // delete white spaces at the end
    minlength: 2,
  }
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;
