const router = require("express").Router();
const journalController = require("../../controllers/Journal");
const checkJwt = require("../api/checkJwt");



// Matches with "/api/journals"
router.route("/")
   .get(checkJwt, journalController.findAll)
   .post(journalController.create);

//

 router.route("/:email")
    .get(checkJwt,journalController.findByEmail);
   

// Matches with "/api/journals/:id"
router
    .route("/:id")
    .get(journalController.findById)
    .put(journalController.update)
    .delete(journalController.remove);


 

module.exports = router;
