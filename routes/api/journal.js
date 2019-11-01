// Required dependencies and packages
const router = require("express").Router();

// Require journal controller
const journalController = require("../../controllers/Journal");

// journalController routes
// Retrieve books saved from Journal
// GET /api/journal
router.get("/", journalController.getJournal);

// Save Journal entry
// POST /api/journal
router.post("/", journalController.saveJournal);

// Delete Journal entry from saved list of Journal entries
// DELETE /api/journal/<journal_id>
router.delete("/:id", journalController.deleteJournal);

// Exporting router
module.exports = router;
