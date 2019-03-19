var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/watchwith', { useMongoClient: true })
.then(
  () => { console.log('mongoose connected successfully') },
  err => { console.log('Mongoose connection error') }
);

var db = mongoose.connection;

module.exports = db;