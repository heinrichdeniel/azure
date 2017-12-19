var Movie = require('../database/index').Movie;
var Actor = require('../database/index').Actor;
var MovieActor = require('../database/index').MovieActor;
var ReservedSeat = require('../database/index').ReservedSeat;
var Reservation = require('../database/index').Reservation;

var {movieList, reservedSeats, reservations} = require('./mockup');

module.exports = function(){
  Promise.all(movieList.map((movie) => {
    Movie.create(movie).then((createdMovie) => {
      return Promise.all(movie.actors.map((actor) => {
        return Actor.create({name: actor}).then((createdActor) => {
          return MovieActor.create({
            actorId: createdActor.id,
            movieId: createdMovie.id
          })
        })
      }))
    })
  }))
  .then(() =>{
    Reservation.create(reservations[0]).then(() => {
      Reservation.create(reservations[1]).then(() => {
        reservedSeats.map(seat =>{
          ReservedSeat.create(seat);
        })
      })
    })
  })
};
