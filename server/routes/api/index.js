const router = require('express').Router();

const unitRoutes = require('./unitRoutes');

router.use('/commanders', unitRoutes);

module.exports = router;
