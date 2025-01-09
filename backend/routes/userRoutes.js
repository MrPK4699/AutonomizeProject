const express = require('express');
const {
  saveUser,
  addFriends,
  softDeleteUser,
  updateUser,
  listUsers,
} = require('../controllers/userController');
const {userValidator, updateValidator} = require('../middleware/validation');


const router = express.Router();

router.post('/users',userValidator, saveUser);
router.post('/users/:username/friends', addFriends);
router.delete('/users/:username', softDeleteUser);
router.patch('/users/:username', updateValidator, updateUser);
router.get('/users', listUsers);

module.exports = router;
