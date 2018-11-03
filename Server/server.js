let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'), //created model loading here
    bodyParser = require('body-parser');
    cors = require('cors');
    path = require('path');
    
//mongoose instance connection url connection
mongoose.connect('mongodb://localhost:27017/musicdb');
mongoose.Promise = global.Promise;

//Enabling CORS
app.use(cors());

//Adding body parser for handling request and response objects.
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// configure a public directory to host static content
// app.use(express.static(__dirname + '/public'));

//Initialize app
let initApp = require('./server/app');
initApp(app);

//checking
app.listen(port,()=>{
    console.log('Stickies RESTful API server started on: ' + port);
});
