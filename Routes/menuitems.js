const express = require('express');

const router = express.Router();

const db = require('../models');

// GET - Get all menu items
router.get('/', async(req, res) => {
    try {
        const menuitems = await db.menu.find({});
        res.json(menuitems);
    } catch (err) {
        res.status(500).send(err);
    }
});

// POST - Create new menu item
router.post('/', async(req, res) => {
    try {
        const menuitem = req.body;
        const result = await db.menuitem.create(menuitem);
        res.json(result);
    } catch (err) {
        res.status(500).send(err);
    }
});

// PUT - Add items to a menu
router.put('/:id', async(req, res) => {
    try {
        const newmenuitem = req.body;
        const result = await db.menu.findByIdAndUpdate(
            req.params.id, { $push: { menuitems: newmenuitem } }, { new: true }
        );
        res.json(result);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;