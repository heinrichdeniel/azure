var express = require('express');
var parser = require('body-parser');
let cors = require('cors');
var routes = require('./src/routes'); 
var config = require('./src/config');
var database = require('./src/database');
var initializeDB = require('./src/utils/initializeDB');

var app = express();

app.use(parser.json({limit: '50mb'}));
app.use(parser.urlencoded({limit: '50mb', extended: true}));
app.use(cors({exposedHeaders: ['Location']}));
app.use('/', routes);

database.sequelize.sync({force: true}).then(function() {
    initializeDB();
    app.listen(config.app.port, function () {
        console.log('API listening on port ' + config.app.port);
    });
})

