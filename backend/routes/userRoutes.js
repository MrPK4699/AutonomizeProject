const express = require('express');
const {
  saveUser,
  addFriends,
  softDeleteUser,
  updateUser,
  listUsers,
} = require('../controllers/userController');

const router = express.Router();

router.post('/users', saveUser);
router.post('/users/:username/friends', addFriends);
router.delete('/users/:username', softDeleteUser);
router.patch('/users/:username', updateUser);
router.get('/users', listUsers);

module.exports = router;
