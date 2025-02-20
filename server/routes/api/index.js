import express from 'express';
import Commander from '../api/unitRoutes.js';

const router = express.Router();

console.log('Running API Index');

router.get('/commanders', async (req, res) => {
  try {
    const commanders = await Commander.find();
    res.json(commanders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
