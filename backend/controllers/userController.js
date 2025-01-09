const User = require('../models/User');
const axios = require('axios');

// Save GitHub user data to database
exports.saveUser = async (req, res) => {
  const { username } = req.body;
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ username, isDeleted: false });
    if (existingUser) {
      return res.status(200).json(existingUser);
    }

    // Fetch data from GitHub API
    const { data } = await axios.get(`https://api.github.com/users/${username}`);
    const user = new User({
      username: data.login,
      name: data.name,
      bio: data.bio,
      blog: data.blog,
      location: data.location,
      public_repos: data.public_repos,
      public_gists: data.public_gists,
      followers: data.followers,
      following: data.following,
      avatar_url: data.avatar_url,
      created_at: data.created_at,
      updated_at: data.updated_at,
    });

    // Save to database
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch/save user data.' });
  }
};

// Find mutual followers and save as friends
exports.addFriends = async (req, res) => {
  const { username } = req.params;
  try {
    const user = await User.findOne({ username, isDeleted: false });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const { data: followers } = await axios.get(`https://api.github.com/users/${username}/followers`);
    const { data: following } = await axios.get(`https://api.github.com/users/${username}/following`);

    const mutuals = followers.filter(f => following.some(fol => fol.login === f.login)).map(f => f.login);
    user.friends = mutuals;
    await user.save();

    res.status(200).json({ friends: mutuals });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch/add friends.' });
  }
};

// Soft delete user
exports.softDeleteUser = async (req, res) => {
  const { username } = req.params;
  try {
    const user = await User.findOneAndUpdate({ username }, { isDeleted: true });
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete user.' });
  }
};

// Update user data
exports.updateUser = async (req, res) => {
  const { username } = req.params;
  const updates = req.body;
  try {
    const user = await User.findOneAndUpdate({ username }, updates, { new: true });
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update user.' });
  }
};

// List all users sorted by fields
exports.listUsers = async (req, res) => {
  const { sortBy } = req.query;
  try {
    const users = await User.find({ isDeleted: false }).sort({ [sortBy]: 1 });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users.' });
  }
};
