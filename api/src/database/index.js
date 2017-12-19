var Sequelize = require("sequelize");
var config = require("../config");

var sequelize = new Sequelize(config.database.db , config.database.username, config.database.password, {
    host: config.database.host,
    dialect: 'postgres',
    port: config.database.port,
    pool: {
        max: 25,
        min: 0,
        idle: 10000,
    },
    define: {
        paranoid: true
    },
    logging: false,
    
});

var Movie = sequelize.import('./models/movie');
var Actor = sequelize.import('./models/actor');
var Reservation = sequelize.import('./models/reservation');
var ReservedSeat = sequelize.import('./models/reservedSeat');

MovieActor = sequelize.define('movie_actor');
Movie.belongsToMany(Actor, { through: MovieActor });
Actor.belongsToMany(Movie, { through: MovieActor });

Movie.hasMany(Reservation);
Reservation.belongsTo(Movie);

Reservation.hasMany(ReservedSeat);
ReservedSeat.belongsTo(Reservation);

module.exports = {
    Sequelize,
    sequelize,
    Movie,
    Actor,
    MovieActor,
    Reservation,
    ReservedSeat
};