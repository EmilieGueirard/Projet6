const Book = require('../models/Book');

exports.getAllBook = (req, res, next) => {
    Book.find()
        .then(book => res.status(200).json(book))
        .catch(error => res.status(404).json({ error }));
};