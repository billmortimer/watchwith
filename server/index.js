var express = require('express');
var bodyParser = require('body-parser');
const Movie = require('../database-mongo/Movie.js');
const Friend = require('../database-mongo/Friend.js');

// var movies = require('../database-mongo');

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../react-client/dist'));


app.get('/api/movies', (req, res) => {
  console.log('Server - GET /movies');
  // Get all the movies from the database
  Movie.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      //console.log('In GET response');
      //console.log(data);
      res.json(data);
    }
  });
});

app.post('/api/movies', (req, res) => {
  console.log('POST - /movies');
  let data = req.body;
  //console.log(data);
  Movie.findOneAndUpdate({ id: data.id }, data, { upsert: true , new: true })
  .then(newMovie => res.json(newMovie))
  .catch(err => console.log(err));
});

app.delete('/api/movies/:id', (req, res) => {
  console.log('Delete - /movies/id');
  let movieId = req.params.id;
  if (movieId) {
    Movie.deleteOne({ id: movieId })
    .then(removed => res.json(removed))
    .catch(err => console.log(err));
  }
});

// Friend
app.get('/api/friends', (req, res) => {
  console.log('Server - GET /friends');
  // Get all the movies from the database
  Friend.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      //console.log('In GET response');
      //console.log(data);
      res.json(data);
    }
  });
});
app.post('/api/friends', (req, res) => {
  console.log('POST - /friends');
  let data = req.body;
  //console.log(data);
  Friend.findOneAndUpdate({ email: data.email }, data, { upsert: true , new: true })
  .then(newFriend => res.json(newFriend))
  .catch(err => console.log(err));
});

app.delete('/api/friends/:id', (req, res) => {
  console.log('Delete - /friends/id');
  let friendId = req.params.id;
  console.log(friendId);
  if (friendId) {
    Friend.deleteOne({ _id: friendId })
    .then(removed => res.json(removed))
    .catch(err => console.log(err));
  }
});

app.listen(3666, function() {
  console.log('listening on port 3666!');
});

