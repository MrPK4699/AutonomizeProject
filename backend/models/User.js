const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  name: String,
  bio: String,
  blog: String,
  location: String,
  repos_url: String,
  public_repos: Number,
  public_gists: Number,
  followers: Number,
  following: Number,
  avatar_url: String,
  isDeleted: { type: Boolean, default: false },
  created_at: Date,
  updated_at: Date,
  friends: [{ type: String }],
});

module.exports = mongoose.model('User', userSchema);
