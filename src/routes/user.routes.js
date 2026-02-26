const express = require('express');
const router = express.Router();
const { createUser, getUsers, updateUser, deleteUser } = require('../services/user.service');

// Create user
router.post('/', async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = await createUser(name, email);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update user name
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const user = await updateUser(id, name);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete user
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await deleteUser(id);
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;