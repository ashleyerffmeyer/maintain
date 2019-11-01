// Required dependencies and packages
const router = require("express").Router();

// Require journal controller
const journalController = require("../../controllers/Journal");

// journalController routes
// Retrieve books saved from Journal
// GET /api/journal
router.get("/", (req, res) => {
    res.json({
        status: 'OK',
        data: null,
        detail: null,
        code: 200
    })
});

// Exporting router
module.exports = router;
