const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/register', async (req, res) => {
  const { publicKey } = req.body;
  const user = new User({ publicKey });
  await user.save();
  res.json({ success: true, message: 'User registered!' });
});

module.exports = router;
