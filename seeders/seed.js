let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/menu", {
    useNewUrlParser: true,
    useFindAndModify: false
});

let menuSeed = [{
        menuitem: [{
            type: "appetizer",
            name: "Mac an Cheese",
            Cost: 15,
        }]
    },
    {
        menuitem: [{
            type: "appetizer",
            name: "Wings",
            Cost: 10,
        }]
    },
    {
        menuitem: [{
            type: "appetizer",
            name: "Nachos",
            Cost: 13,
        }]
    },
    {
        menuitem: [{
            type: "entree",
            name: "steaktips",
            Cost: 20,
        }]
    },
    {
        menuitem: [{
            type: "entree",
            name: "rissoto",
            Cost: 20,
        }]
    },
    {
        menuitem: [{
            type: "entree",
            name: "salmon",
            Cost: 25,
        }]
    },

    {
        menuitem: [{
            type: "dessert",
            name: "lava cake",
            Cost: 10,
        }]
    }
];

db.Workout.deleteMany({})
    .then(() => db.menu.collection.insertMany(menuSeed))
    .then(data => {
        console.log(data.result.n + "Menu item added");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });