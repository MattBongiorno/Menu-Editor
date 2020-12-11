const express = require('express');

const workoutsRoutes = require('./menuitems');

const router = express.Router();

router.use('/menuitems', itemRoutes);

module.exports = router;