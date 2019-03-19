const mongoose = require('mongoose');
const db = require('./index.js');
const Movie = require('./Movie.js');
const Friend = require('./Friend.js');

const fightClubFriends = [
  {
    'name': 'Tyler Durden',
    'email': 'tyler.durden@fightclub.com',
    'phone': '(555) 831-9999',
    'pic_url': 'https://m.media-amazon.com/images/M/MV5BMjJmYTNkNmItYjYyZC00MGUxLWJhNWMtZDY4Nzc1MDAwMzU5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg'
  },
  {
    'name': 'Marla Singer',
    'email': 'marla.singer@fightclub.com',
    'phone': '(555) 831-6666',
    'pic_url': 'https://m.media-amazon.com/images/M/MV5BMTUzMzUzMDg5MV5BMl5BanBnXkFtZTcwMDA5NDMwNA@@._V1_UY317_CR4,0,214,317_AL_.jpg'
  },
  {
    'name': 'Jenny Durden',
    'email': 'jenny.durden@fightclub.com',
    'phone': '(555) 867-5309',
    'pic_url': 'https://m.media-amazon.com/images/M/MV5BMGNhNjZkMDQtN2ZlMi00YTdiLWJhYmQtZTNjZDJkNDM1NjFlXkEyXkFqcGdeQXVyMTA4MDk0NDQ@._V1_UY317_CR11,0,214,317_AL_.jpg'
  },
  {
    'name': 'Jennifer Mortimer',
    'email': 'wickeymail@fightclub.com',
    'phone': '(555) 408-7715',
    'pic_url': 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/52951194_10218490624959940_4361017639540097024_n.jpg?_nc_cat=108&_nc_ht=scontent-atl3-1.xx&oh=cbb11dd81f26063f4f4dd68e7b0730cb&oe=5D1259D0'
  }
]

// Create several friends
Friend.insertMany(fightClubFriends);

const fightClub = {
  "id": 550,
  "imdb_id": "tt0137523",
  "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
  "poster_path": "/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg",
  "release_date": "1999-10-15",
  "tagline": "Mischief. Mayhem. Soap.",
  "title": "Fight Club",
  "friends": fightClubFriends
};

// Create a single movie object in the database
Movie.create(fightClub);

