const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
      }
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;