const router = require("express").Router();
const journalRoutes = require("./journal");

// journal routes
router.use("/journals", journalRoutes);

module.exports = router;
