const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  flagged: Boolean,
  created_at: Date,
  updated_at: Date,
});

userSchema.pre('save', (next) => {
  const currentDate = new Date();
  this.updated_at = currentDate;
  if (!this.created_at) {
    this.created_at = currentDate;
  }
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
