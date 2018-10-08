const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: { type: String, required: true, min: 3, max: 100 },
});

GenreSchema
.virtual('url');
// .get(function() {

// })

module.exports = mongoose.model('Genre', GenreSchema);