import express from 'express';
import Commander from '../api/unitRoutes.js';

const router = express.Router();

console.log('Running API Index');
console.log("ATLAS_URI:", process.env.ATLAS_URI);

router.get('/commanders', async (req, res) => {
  try {
    const commanders = await Commander.find();
    res.json(commanders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
