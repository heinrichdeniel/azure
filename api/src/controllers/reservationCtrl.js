var Reservation = require('../database/index').Reservation;
var ReservedSeat = require('../database/index').ReservedSeat;
var Movie = require('../database/index').Movie;
var sequelize = require('../database/index').sequelize;
var moment = require('moment');

module.exports.saveReservation = function (req, res) {
  sequelize.transaction({ autocommit: false }, async function(t) {
    await Reservation.create({
      email: req.body.email,
      phone: req.body.phone,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      date: req.body.date,
      time: req.body.time,
      movieId: req.body.movieId
    })
      .then((reservation) => {
        Promise.all(req.body.selectedSeats.map((row, rowIndex) => {
          Promise.all(row.map(async (column) => {
            await ReservedSeat.create({
              row: rowIndex,
              column: column,
              reservationId: reservation.id
            })
            .catch(()=>{
              t.rollback()
            })
          }))
        }));
      })      
      .catch(()=>{
        t.rollback()
      })
    }).done(function() {
      res.json({
        success:true
      });
    })
};


module.exports.updateReservation = function (req, res) {
  Reservation.update({
      email: req.body.email,
      phone: req.body.phone,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      date: req.body.date,
      time: req.body.time,
    },
    {
      where: {
        id: req.body.id
      }
    })
    .then((reservation) => {
      ReservedSeat.destroy({
        force: true,
        where: {
            reservationId: req.body.id
        }
      }).then(() => {
        req.body.selectedSeats.map((row, rowIndex) => {
          row.map(column => {
            ReservedSeat.create({
              row: rowIndex,
              column: column,
              reservationId: req.body.id
            })
          })
        });
        res.json({
            success:true
        });
      })
    })
};

module.exports.deleteReservation = function (req, res) {
  ReservedSeat.destroy({
    force: true,
    where: {
        reservationId: req.body.id
    }
  }).then(() => {
    Reservation.destroy({
      force: true,
      where: {
          id: req.body.id
      }
    }).then( () => {
      res.json({
        success:true
      })
    })
  })
};

module.exports.getReservationsByEmail = function (req, res) {
  Reservation.findAll({
    where:{
      email: req.query.email,
    },
    include: [
      {model: ReservedSeat},
      {model: Movie},
    ]
  })
    .then((reservations) => {
      res.json({
          success:true,
          reservations
      });
    })
};

module.exports.getMovieReservations = function (req, res) {
  Reservation.findAll({
    where:{
      movieId: req.query.movieId,
      date: {
        $and:{
          $gt: moment(req.query.date).set('hours', 0).format(),
          $lt: moment(req.query.date).set('hours', 23).format(),
        }
      },
      time: req.query.time,
    },
    include: [
      {model: ReservedSeat},
      {model: Movie},
    ]
  })
    .then((reservations) => {
      res.json({
          success:true,
          reservations
      });
    })
};

