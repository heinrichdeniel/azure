var router = require('express').Router();
var movieCtrl = require('../controllers/movieCtrl');
var reservationCtrl = require('../controllers/reservationCtrl');

router.get('/movie', movieCtrl.getMovies);

router.get('/reservation/:movie_id', reservationCtrl.getMovieReservations);

router.get('/reservation', reservationCtrl.getReservationsByEmail);

router.post('/reservation', reservationCtrl.saveReservation);

router.put('/reservation', reservationCtrl.updateReservation);

router.delete('/reservation', reservationCtrl.deleteReservation);

module.exports = router;
