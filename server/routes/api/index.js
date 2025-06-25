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

// This is the main API index file that sets up the routes for the application.
// It imports the Commander routes and sets up a GET endpoint to fetch all commanders from the database