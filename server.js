const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const routes = require('./routes/index');
const htmlRoutes = require('./routes/htmlRoutes');

require('dotenv').config()

// Set up Express
const PORT = process.env.PORT || 3000;
const app = express();

// Set up logger
app.use(logger('dev'));

// Set up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Set up Express app to server static files
app.use(express.static('public'));

// Set up api routes
app.use('/api', routes);

// Set up html routes
app.use('/', htmlRoutes);

// connect to Mongo database with Mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Menu', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

// Listener
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});