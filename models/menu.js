const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema for a menu
const menuSchema = new Schema({

    menuitems: [{
        type: {
            type: String,
            trim: true,
            required: 'Type is required.'
        },

        name: {
            type: String,
            trim: true,
            required: 'Name is required.',
        },

        cost: {
            type: Number,
            trim: true,
            required: 'Cost is required.',
        }
    }]
});


// Create Workout mongoose model and export 
const menu = mongoose.model('menu', menuSchema);

module.exports = menu;