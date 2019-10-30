// Required dependencies and packages
const router = require("express").Router();

// Require journal controller
const journalController = require("../../controllers/Journal");

// journalController routes
// Retrieve books saved from Journal
router.get("/get_journal", journalController.getJournal);

// Save Journal entry
router.post("/save_journal", journalController.saveJournal);

// Delete Journal entry from saved list of Journal entries
router.post("/delete_Journal/:id", journalController.deleteJournal);

// Search for books by title using the Google Books API
//router.get("/book_search/:title", googleBooksController.bookSearch);

// Exporting router
module.exports = router;