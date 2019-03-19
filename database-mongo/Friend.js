const mongoose = require('mongoose');
const db = require('./index.js');

var friendSchema = mongoose.Schema({
  name: String,
  email: { type: String, index: { unique: true } },
  phone: String,
  pic_url: String,
},
{
  timestamps: false
}
);

var Friend = mongoose.model('Friend', friendSchema);

var selectAll = function(callback) {
  Friend.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports = Friend;
module.exports.selectAll = selectAll;