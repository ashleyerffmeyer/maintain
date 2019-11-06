const router = require("express").Router();
const journalController = require("../../controllers/Journal");

// Matches with "/api/journals"
router.route("/")
    .get(journalController.findAll)
    .post(journalController.create);

// Matches with "/api/journals/:id"
router
    .route("/:id")
    .get(journalController.findById)
    .put(journalController.update)
    .delete(journalController.remove);

module.exports = router;
