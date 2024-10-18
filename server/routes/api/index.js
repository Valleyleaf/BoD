const express = require('express');
const commanders = require('../models/commanders');
const router = express.Router();

router.get('/commanders', async (req, res) => {
  try {
    const commanders = await Item.find();
    res.json(commanders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
