const express = require('express');
const router = express.Router();

const Commander = require('../api/unitRoutes');

console.log('Running API Index');

router.get('/commanders', async (req, res) => {
  try {
    const commanders = await Commander.find();
    res.json(commanders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
