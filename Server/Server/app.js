'use strict';
module.exports = function (app) {
    //Initializing models
    let model = require('./Models/Users');
            require('./Models/Tracks');

    //Initializing routes
    let userRoutes = require('./routes/routes');
    userRoutes(app);
};