let mongoose = require('mongoose');
let Schema = mongoose.Schema;


var BookSchema = new Schema({
    title: { type: String },
    author: { type: String },
    year: { type: Number },
    pages: { type: Number, min: 1 },
    createdAt: { type: Date, default: Date.now }   
});

var book = mongoose.model('book', BookSchema);
module.exports = book;
