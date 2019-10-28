// Required dependencies and packages
const router = require("express").Router();

// Require journal controller
const journalController = require("../../controllers/Journal");

// journalController routes
// Retrieve books saved from Google Books search results
router.get("/get_journal", googleBooksController.getBooks);

// Save books from Google Books search results
router.post("/save_journal", googleBooksController.saveBook);

// Delete book from saved list of Google Books search results
router.post("/delete_book/:id", googleBooksController.deleteBook);

// Search for books by title using the Google Books API
router.get("/book_search/:title", googleBooksController.bookSearch);

// Exporting router
module.exports = router;