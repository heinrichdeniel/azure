var Movie = require('../database/index').Movie;

module.exports.getMovies = function (req, res) {
  Movie.findAll({})
    .then((movies) => {
        res.json({
            success:true,
            movies
        });
    })
};
