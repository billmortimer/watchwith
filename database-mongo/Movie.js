const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

var movieSchema = mongoose.Schema({
  id: { type: Number, index: { unique: true } },
  title: String,
  tagline: String,
  imdb_id: String,
  overview: String,
  poster_path: String,
  release_date: String,
  friends: Array
},
{
  timestamps: true
}
);

var Movie = mongoose.model('Movie', movieSchema);

var selectAll = function(callback) {
  Movie.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports = Movie;
module.exports.selectAll = selectAll;

// Seed with one movie
// node database-mongo/seed.js