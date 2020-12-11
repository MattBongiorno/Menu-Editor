const express = require('express');

const router = express.Router();

const path = require('path');

// Route to add menu item
router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/menuedit.html'));
});

// Route to view menu
router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/menu.html'));
});

// Route for index page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;