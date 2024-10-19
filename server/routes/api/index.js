const express = require('express');
const commanders = require('../../models/Units');
const router = express.Router();

console.log('Running api Index')

router.get('/commanders', async (req, res) => {
  try {
    const commanders = await Item.find();
    res.json(commanders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
